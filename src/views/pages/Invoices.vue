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
                                <h5 class="mb-0">Invoices</h5>
                            </div>
                            <div class="right-content">
                                <a href="javascript:void(0);" @click="actionShowSideBar()" class="menu-toggler" :class="[showSideBar ? 'show' : '']">
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

        <div class="page-content">
            <div class="container">
                <div class="serach-area">
                    <div class="input-group search-input">
                        <input type="text" placeholder="Invoice number or customer..."
                            class="form-control style-1 main-in">
                        <a href="javascript:void(0);" class="btn-close"><i class="fa-solid fa-xmark"></i></a>
                    </div>
                    <div class="filter-area">
                        <div>
                            <h5>Result</h5>
                            <span>{{invoices.length}} invocies</span>
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
                </div>
                <div class="notification-content">
                    <a v-for="invoice in invoices" href="#">
                        <div class="notification">
                            <h6>#00{{ invoice.id }}</h6>
                            <p>{{invoice.customer.name}}</p>
                            <p>Items:{{invoice.items.length}}</p>
                            <div class="notification-footer">
                                <span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
                                            stroke="#787878" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 3V6L8 7" stroke="#787878" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    {{ invoice.created_at }}
                                </span>
                                <p class="mb-0" style="font-weight: bold;font-size: 16px;">Total: ${{ calcItemTotal(invoice) }}</p>
                            </div>
                        </div>
                    </a>
                   
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
            invoices: [],
            showSideBar: false,

        }
    },
    mounted() {
        this.initiateGetInvoices()
    },
    computed: {
        ...mapGetters(['authUser', 'baseURL', 'isAuthenticated']),
    },

    methods: {
        ...mapActions(['getCustomers', 'getStoreInvoices']),
        actionShowSideBar() {
            this.showSideBar = this.showSideBar? false : true
        },
        initiateGetInvoices() {
            this.getStoreInvoices(this.authUser.store.id).then((response) => {
                this.invoices = response.data
            }).catch(() => {
            });
        },

        calcItemTotal(invoice){
            let total = 0;
            invoice.items.forEach(item => {
                total += item.stock.stock.unit_price * item.number_items_unit
            });
            return total
        }

    }
}


</script>