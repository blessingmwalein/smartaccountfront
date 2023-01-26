<template>
    <MainLayout :showBottomNav="false" :showSideBar="showSideBar">
        <template #header>
            <header class="header">
                <div class="main-bar">
                    <div class="container">
                        <div class="header-content">
                            <div class="left-content">
                                <router-link to="/" class="back-btn">
                                    <svg width="18" height="18" viewBox="0 0 10 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.03033 0.46967C9.2966 0.735936 9.3208 1.1526 9.10295 1.44621L9.03033 1.53033L2.561 8L9.03033 14.4697C9.2966 14.7359 9.3208 15.1526 9.10295 15.4462L9.03033 15.5303C8.76406 15.7966 8.3474 15.8208 8.05379 15.6029L7.96967 15.5303L0.96967 8.53033C0.703403 8.26406 0.679197 7.8474 0.897052 7.55379L0.96967 7.46967L7.96967 0.46967C8.26256 0.176777 8.73744 0.176777 9.03033 0.46967Z"
                                            fill="#a19fa8" />
                                    </svg>
                                </router-link>
                            </div>
                            <div class="mid-content">
                                <h5 class="mb-0">Create Invoice</h5>
                            </div>
                            <div class="right-content">
                                <a href="javascript:void(0);" @click="actionShowSideBar()" class="menu-toggler"
                                    :class="[showSideBar ? 'show' : '']">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4"
                                            d="M16.0755 2H19.4615C20.8637 2 22 3.14585 22 4.55996V7.97452C22 9.38864 20.8637 10.5345 19.4615 10.5345H16.0755C14.6732 10.5345 13.537 9.38864 13.537 7.97452V4.55996C13.537 3.14585 14.6732 2 16.0755 2Z"
                                            fill="#a19fa8" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                                            fill="#a19fa8" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </template>

        <div class="page-content bottom-content">
            <div class="container">
                <div class="serach-area">

                    <div class="">
                        <div v-if="selectedCustomer">
                            <h5>Selected Customer</h5>
                            <div class="card job-post">
                                <div class="card-body">
                                    <div class="media media-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                            viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                <path
                                                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                                    fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                                <path
                                                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                                    fill="#000000" fill-rule="nonzero"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="card-info">
                                        <h6 class="title"><a href="javascript:void(0);">{{ selectedCustomer.name }}</a>
                                        </h6>
                                        <span class="location">{{ selectedCustomer.email }}</span>
                                        <span class="location">{{ selectedCustomer.phone }}</span>
                                        <span class="location">{{ selectedCustomer.address }}</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="filter-area">

                        <div>
                            <h5>Products In Shop Bag</h5>
                            <span>{{ productsToBeSold.length }} found</span>
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
                            <li v-for="product in productsToBeSold">
                                <div data-bs-toggle="modal" data-bs-target="#exampleModal5" class="item-content"
                                    @click="update(product)">
                                    <a href="job-detail.html" class="item-media"><img
                                            :src="`${baseURL}images/${product.allocationProduct.stock.image}`"
                                            alt="logo" width="55"></a>
                                    <div class="item-inner">
                                        <div class="item-title-row">
                                            <div class="item-subtitle">{{
                                                product.allocationProduct.stock.category.name
                                            }}</div>
                                            <h6 class="item-title"><a href="job-detail.html">{{
                                                product.allocationProduct.stock.name
                                            }}</a>
                                            </h6>
                                        </div>
                                        <div class="d-flex align-items-center mb-2">

                                            <div class="item-price">Unit Price: ${{
                                                product.allocationProduct.stock.unit_price
                                            }}</div>
                                        </div>
                                        <div class="d-flex align-items-center">

                                            <div class="item-price">Units: {{ product.number_items_unit }}
                                            </div>
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
        <div class="footer fixed bg-white">
            <div class="container">
                <div class="footer-btn d-flex align-items-center">
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal5" class="form-check checkmark">
                        <input class="form-check-input" type="checkbox" id="flexCheckDefault1">
                        <label class="form-check-label" for="flexCheckDefault1">
                            <svg enable-background="new 0 0 512 512" height="20" id="Layer_1" version="1.1"
                                viewBox="0 0 512 512" width="20" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M256,512C114.625,512,0,397.391,0,256C0,114.609,114.625,0,256,0c141.391,0,256,114.609,256,256  C512,397.391,397.391,512,256,512z M256,64C149.969,64,64,149.969,64,256s85.969,192,192,192c106.047,0,192-85.969,192-192  S362.047,64,256,64z M288,384h-64v-96h-96v-64h96v-96h64v96h96v64h-96V384z" />
                            </svg>
                        </label>
                    </div>
                    <a v-if="!customer_id" href="#" data-bs-toggle="modal" data-bs-target="#choose_customer_modal"
                        class="btn btn-primary btn-rounded flex-1 ms-2">{{
    customer_id?'Create Sell': 'Select
                        Customer'}}</a>
                    <a v-else @click="submitProducts" href="#" class="btn btn-primary btn-roundesd flex-1 ms-2">{{
                        customer_id?'Create Invoice': 'Select
                    Customer'}}</a>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" id="exampleModal5" aria-labelledby="exampleModal5" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ isUpdate? "Update Product": "Choose Product" }}</h5>
                        <button class="btn-close" id="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body small">
                        <div class="basic-form">
                            <form>
                                <div class="list item-list recent-jobs-list">
                                    <ul>
                                        <li v-if="selectedProduct">
                                            <div class="item-content">
                                                <a href="#" class="item-media"><img
                                                        :src="`${baseURL}images/${selectedProduct.stock.image}`"
                                                        alt="logo" width="55"></a>
                                                <div class="item-inner">
                                                    <div class="item-title-row">
                                                        <div class="item-subtitle">{{
                                                            selectedProduct.stock.category.name
                                                        }}</div>
                                                        <h6 class="item-title"><a href="job-detail.html">{{
                                                            selectedProduct.stock.name
                                                        }}</a>
                                                        </h6>
                                                    </div>
                                                    <div class="d-flex align-items-center mb-2">

                                                        <div class="item-price">Unit Price: ${{
                                                            selectedProduct.stock.unit_price
                                                        }}
                                                        </div>
                                                    </div>
                                                    <div class="d-flex align-items-center">

                                                        <div class="item-price">Units available: {{
                                                            selectedProduct.number_items_unit
                                                        }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                <div class="mb-3 form-input">
                                    <label>Choose Product</label>
                                    <select @change="onChangeSelectedForm" class="form-select"
                                        v-model="selectedProductId" aria-label="Default select example">
                                        <option :value="product.id" v-for="product in products">{{ product.stock.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleFormControlInput1" class="form-label">Units</label>
                                    <input type="number" class="form-control" v-model="selectedUnits"
                                        id="exampleFormControlInput1" placeholder="0">
                                </div>
                                <a href="#" @click="addToProductsSold()" class="btn btn-sm btn-secondary btn-block">{{
                                    isUpdate? "Update": "Add"
                                }}</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" tabindex="-1" id="choose_customer_modal" aria-labelledby="choose_customer_modal"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Select Customer</h5>
                        <button class="btn-close" id="btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="modal-body small">
                        <div class="basic-form">
                            <form>
                                <div class="card job-post" v-if="selectedCustomer">
                                    <div class="card-body">
                                        <div class="media media-80">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path
                                                        d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                                        fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                                    <path
                                                        d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                                        fill="#000000" fill-rule="nonzero"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="card-info">
                                            <h6 class="title"><a href="javascript:void(0);">{{
                                                selectedCustomer.name
                                            }}</a></h6>
                                            <span class="location">{{ selectedCustomer.email }}</span>
                                            <span class="location">{{ selectedCustomer.phone }}</span>
                                            <span class="location">{{ selectedCustomer.address }}</span>

                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3 form-input">
                                    <label>Choose Customer</label>
                                    <select @change="chooseCustomer" class="form-select" v-model="customer_id"
                                        aria-label="Default select example">
                                        <option :value="customer.id" v-for="customer in customers">{{ customer.name }}
                                        </option>
                                    </select>
                                </div>

                                <a @click="chooseCustomer" class="btn btn-sm btn-secondary btn-block" id="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close">Choose</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button data-bs-toggle="modal" id="showSuccessModal" style="display:none"
            data-bs-target="#invoice_created_modal">Zvaita</button>
        <div class="modal fade" tabindex="-1" id="invoice_created_modal" aria-labelledby="exampleModal4"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center small p-4">
                        <i class="fa fa-4x fa-check-circle text-success m-b15"></i>
                        <h5>Invoice Created Successfully</h5>
                        <p class="m-b0">You can continue creating new invoices.</p>
                    </div>
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
    data() {
        return {
            products: [],
            productsSold: [],
            productsToBeSold: [],
            selectedProduct: null,
            selectedProductId: null,
            selectedUnits: null,
            isUpdate: false,
            customer_id: null,
            customers: [],
            selectedCustomer: null,
            showSideBar: false,
        }
    },
    mounted() {
        this.initiateGetProducts()
    },
    computed: {
        ...mapGetters(['authUser', 'baseURL', 'isAuthenticated']),
    },

    methods: {
        ...mapActions(['getStoreProducts', 'getStoreProductsSold', 'postStoreStockSold', 'getCustomers']),
        initiateGetProducts() {
            this.getStoreProducts({ id: this.authUser.store.id }).then((response) => {
                this.products = response.data
            }).catch((error) => {
                console.log(error)
            })

            this.getStoreProductsSold({ id: this.authUser.store.id }).then((response) => {
                this.productsSold = response.data
            }).catch((error) => {
                console.log(error)
            })
            this.getCustomers().then((response) => {
                this.customers = response.data
            }).catch((error) => {
                console.log(error)
            })
        },

        onChangeSelectedForm() {
            this.selectedProduct = this.products.find(product => product.id == this.selectedProductId)
        },

        addToProductsSold() {
            //check if product is already in products sold
            let product = this.productsToBeSold.find(product => product.stock_allocation_id == this.selectedProduct.id)
            if (product) {
                this.updateProductSold(this.selectedProduct.id)
                document.getElementById('btn-close').click()
                this.selectedProduct = null
                this.selectedProductId = null
                this.selectedUnits = null
                return
            }
            this.productsToBeSold.push({
                allocationProduct: this.selectedProduct,
                number_items_unit: this.selectedUnits,
                stock_allocation_id: this.selectedProduct.id,
            })
            this.selectedProduct = null
            this.selectedProductId = null
            this.selectedUnits = null
            document.getElementById('btn-close').click()
        },

        removeFromProductsSold(id) {
            this.productsToBeSold = this.productsToBeSold.filter(product => product.stock_allocation_id != id)
        },

        //create function to update product in product sold
        updateProductSold(id) {
            this.productsToBeSold = this.productsToBeSold.map(product => {
                if (product.stock_allocation_id == id) {
                    product.number_items_unit = this.selectedUnits
                }
                return product
            })
        },

        update(product) {
            this.isUpdate = true
            this.selectedProduct = product.allocationProduct
            this.selectedProductId = product.stock_allocation_id
            this.selectedUnits = product.number_items_unit
        },

        submitProducts() {
            this.postStoreStockSold(
                {
                    store_id: this.authUser.store.id,
                    customer_id: this.customer_id,
                    products: this.productsToBeSold
                }).then((response) => {
                    this.productsToBeSold = []
                    this.selectedProduct = null
                    this.selectedProductId = null
                    this.selectedUnits = null
                    this.customer_id = null
                    this.selectedCustomer = null
                    document.getElementById('showSuccessModal').click()
                }).catch((error) => {
                    console.log(error)
                })
        },
        chooseCustomer() {
            this.selectedCustomer = this.customers.find(customer => customer.id == this.customer_id)

        },
        actionShowSideBar() {
            this.showSideBar = this.showSideBar ? false : true
        },
    }
}


</script>