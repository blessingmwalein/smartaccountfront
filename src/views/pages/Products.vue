<template>
    <MainLayout>
        <div class="page-content">
			<div class="container">
				<div class="serach-area">
					<div class="input-group search-input">
						<input type="text" placeholder="Search job here..." class="form-control style-1 main-in">
						<a href="javascript:void(0);" class="btn-close"><i class="fa-solid fa-xmark"></i></a>
					</div>
					<div class="filter-area">
						<div>
							<h5>Products</h5>
							<span>{{products.length}} found</span>
						</div>
						<a href="javascript:void(0);" class="filter-btn bg-skyblue light">
							<svg class="text-primary" width="20" height="20" viewBox="0 0 20 18" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path opacity="0.4"
									d="M4.70555 9.89053C4.18944 9.89053 3.77163 10.3146 3.77163 10.8383L3.51416 15.4171C3.51416 16.0846 4.04783 16.625 4.70555 16.625C5.36328 16.625 5.89577 16.0846 5.89577 15.4171L5.63947 10.8383C5.63947 10.3146 5.22167 9.89053 4.70555 9.89053Z"
									fill="#130F26" />
								<path
									d="M5.98037 0.673447C5.98037 0.673447 5.71236 0.397892 5.54618 0.277931C5.30509 0.0926435 5.00783 0 4.71173 0C4.37936 0 4.07039 0.104521 3.81877 0.301685C3.77313 0.348007 3.57886 0.522605 3.41852 0.685325C2.41204 1.6367 0.765393 4.12026 0.262153 5.42083C0.182571 5.618 0.0105329 6.11685 0 6.38409C0 6.63827 0.0561757 6.88294 0.170868 7.11455C0.331202 7.40436 0.582823 7.63715 0.880085 7.76424C1.08606 7.84619 1.70282 7.97328 1.71453 7.97328C2.38981 8.10156 3.48757 8.17045 4.70003 8.17045C5.85514 8.17045 6.90727 8.10156 7.59308 7.99704C7.60478 7.98516 8.37017 7.85807 8.6335 7.71792C9.11333 7.46255 9.41177 6.96371 9.41177 6.43041V6.38409C9.40006 6.03608 9.10163 5.30444 9.09109 5.30444C8.58785 4.07394 7.02079 1.64858 5.98037 0.673447Z"
									fill="#130F26" />
								<path opacity="0.4"
									d="M15.2947 8.10962C15.8108 8.10962 16.2286 7.68559 16.2286 7.16178L16.4849 2.58296C16.4849 1.91543 15.9524 1.375 15.2947 1.375C14.6369 1.375 14.1033 1.91543 14.1033 2.58296L14.3607 7.16178C14.3607 7.68559 14.7785 8.10962 15.2947 8.10962Z"
									fill="#130F26" />
								<path
									d="M19.8292 10.8853C19.6688 10.5955 19.4172 10.3639 19.1199 10.2356C18.914 10.1536 18.296 10.0265 18.2855 10.0265C17.6102 9.89827 16.5124 9.82938 15.3 9.82938C14.1449 9.82938 13.0928 9.89827 12.4069 10.0028C12.3952 10.0147 11.6298 10.1429 11.3665 10.2819C10.8855 10.5373 10.5883 11.0361 10.5883 11.5706V11.617C10.6 11.965 10.8972 12.6954 10.9089 12.6954C11.4122 13.926 12.9781 16.3526 14.0197 17.3265C14.0197 17.3265 14.2877 17.6021 14.4538 17.7209C14.6938 17.9074 14.991 18 15.2895 18C15.6207 18 15.9285 17.8955 16.1812 17.6983C16.2269 17.652 16.4212 17.4774 16.5815 17.3158C17.5868 16.3633 19.2346 13.8796 19.7367 12.5802C19.8175 12.3831 19.9895 11.883 20 11.617C20 11.3616 19.9438 11.1169 19.8292 10.8853Z"
									fill="#130F26" />
							</svg>
						</a>
					</div>
					
					<div class="list item-list recent-jobs-list">
						<ul>
							<li v-for="product in products">
								<div class="item-content">
									<a href="job-detail.html" class="item-media"><img
											:src="`${baseURL}images/${product.stock.image}`" alt="logo" width="55"></a>
									<div class="item-inner">
										<div class="item-title-row">
											<div class="item-subtitle">{{product.stock.category.name}}</div>
											<h6 class="item-title"><a href="job-detail.html">{{product.stock.name}}</a></h6>
										</div>
										<div class="d-flex align-items-center mb-2">
										
											<div class="item-price">Unit Price: ${{product.stock.unit_price}}</div>
										</div>
										<div class="d-flex align-items-center">
											
											<div class="item-price">Available Units: {{ product.number_items_unit }}</div>
										</div>
									</div>
								</div>
								<div class="sortable-handler"></div>
							</li>
							
						</ul>
					</div>
					<!-- Job List -->
				</div>
			</div>
		</div>
    </MainLayout>
</template>
<script >
import MainLayout from '../layouts/MainLayout.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        MainLayout
    },
    data(){
        return{
            products: [],
            productsSold: [],
        }
    },
    mounted(){
        this.initiateGetProducts()
    },
    computed: {
        ...mapGetters(['authUser', 'baseURL', 'isAuthenticated']),
    },

    methods:{
        ...mapActions(['getStoreProducts', 'getStoreProductsSold']),
        initiateGetProducts(){
            this.getStoreProducts({id: this.authUser.store.id}).then((response) => {
                this.products =response.data
            }).catch((error) => {
                console.log(error)
            })

            this.getStoreProductsSold({id: this.authUser.store.id}).then((response) => {
                this.productsSold =response.data
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}


</script>