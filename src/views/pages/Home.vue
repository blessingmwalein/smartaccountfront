<template>
    <MainLayout :showBottomNav="true" :showSideBar="showSideBar">
        <template #header>
            <header class="header transparent">
                <div class="main-bar">
                    <div class="container">
                        <div class="header-content">
                            <div class="left-content">
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
                            <div class="mid-content">
                            </div>
                            <div class="right-content">
                                
                                <a href="javascript:void(0);" @click="logout" class="theme-btn">
                                    <svg class="dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                    <svg class="light" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </template>
        <div class="banner-wrapper author-notification">
            <div class="container inner-wrapper">
                <div class="dz-info">
                    <span>{{ authUser?.name }}</span>
                    <h2 class="name mb-0">{{ authUser?.store.name }}</h2>
                </div>
                <div class="dz-media media-45 rounded-circle">
                    <a href="#"><img :src="authUser?.profile_photo_url" height="100" width="100" class="rounded-circle"
                            alt="author-image"></a>
                </div>
            </div>
        </div>
        <!-- Banner End -->
        <!-- Page Content -->
        <div class="page-content">

            <div class="content-inner pt-0">
                <div class="container fb">
                    <!-- Search -->
                    <form class="m-b30">
                        <div class="input-group">
                            <span class="input-group-text">
                                <a href="javascript:void(0);" class="search-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M20.5605 18.4395L16.7528 14.6318C17.5395 13.446 18 12.0262 18 10.5C18 6.3645 14.6355 3 10.5 3C6.3645 3 3 6.3645 3 10.5C3 14.6355 6.3645 18 10.5 18C12.0262 18 13.446 17.5395 14.6318 16.7528L18.4395 20.5605C19.0245 21.1462 19.9755 21.1462 20.5605 20.5605C21.1462 19.9748 21.1462 19.0252 20.5605 18.4395ZM5.25 10.5C5.25 7.605 7.605 5.25 10.5 5.25C13.395 5.25 15.75 7.605 15.75 10.5C15.75 13.395 13.395 15.75 10.5 15.75C7.605 15.75 5.25 13.395 5.25 10.5Z"
                                            fill="#B9B9B9" />
                                    </svg>
                                </a>
                            </span>
                            <input type="text" placeholder="Search product here..." class="form-control ps-0 bs-0">
                        </div>
                    </form>

                    <!-- Dashboard Area -->
                    <div class="dashboard-area">
                        <!-- Features -->
                        <div class="features-box">
                            <div class="row m-b20 g-3">
                                <div @click="navigateTo('products')" class="col-6">
                                    <div class="card card-bx card-content bg-primary">
                                        <div class="card-body">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"
                                                viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z"
                                                        fill="#fff" />
                                                    <path
                                                        d="M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z"
                                                        fill="#fff" fill-rule="nonzero" opacity="0.3" />
                                                </g>
                                            </svg>
                                            <div class="card-info">
                                                <h4 class="title">{{ products?.length }}</h4>
                                                <p>Stock Allocated</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6" @click="navigateTo('invoices')" >
                                    <div class="card card-bx card-content bg-secondary">
                                        <div class="card-body">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"
                                                viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M12,2 C13.8385982,2 15.5193947,3.03878936 16.3416408,4.68328157 L19,10 C20.365323,12.730646 19.25851,16.0510849 16.527864,17.4164079 C15.7602901,17.8001948 14.9139019,18 14.0557281,18 L9.94427191,18 C6.8913169,18 4.41640786,15.525091 4.41640786,12.472136 C4.41640786,11.6139622 4.61621302,10.767574 5,10 L7.65835921,4.68328157 C8.48060532,3.03878936 10.1614018,2 12,2 Z M7.55,13.6 C9.00633458,14.6922509 10.4936654,15.25 12,15.25 C13.5063346,15.25 14.9936654,14.6922509 16.45,13.6 L15.55,12.4 C14.3396679,13.3077491 13.1603321,13.75 12,13.75 C10.8396679,13.75 9.66033208,13.3077491 8.45,12.4 L7.55,13.6 Z"
                                                        fill="#fff" />
                                                    <path
                                                        d="M6.15999985,21.0604779 L8.15999985,17.5963763 C8.43614222,17.1180837 9.04773263,16.9542085 9.52602525,17.2303509 C10.0043179,17.5064933 10.168193,18.1180837 9.89205065,18.5963763 L7.89205065,22.0604779 C7.61590828,22.5387706 7.00431787,22.7026457 6.52602525,22.4265033 C6.04773263,22.150361 5.88385747,21.5387706 6.15999985,21.0604779 Z M17.8320512,21.0301278 C18.1081936,21.5084204 17.9443184,22.1200108 17.4660258,22.3961532 C16.9877332,22.6722956 16.3761428,22.5084204 16.1000004,22.0301278 L14.1000004,18.5660262 C13.823858,18.0877335 13.9877332,17.4761431 14.4660258,17.2000008 C14.9443184,16.9238584 15.5559088,17.0877335 15.8320512,17.5660262 L17.8320512,21.0301278 Z"
                                                        fill="#fff" opacity="0.3" />
                                                </g>
                                            </svg>

                                            <div class="card-info">
                                                <h4 class="title">{{ productsSold?.length }}</h4>
                                                <p>Stock Sold</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6" @click="refresh()" >
                                    <div class="card card-bx card-content bg-secondary">
                                        <div class="card-body">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"
                                                viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M12,2 C13.8385982,2 15.5193947,3.03878936 16.3416408,4.68328157 L19,10 C20.365323,12.730646 19.25851,16.0510849 16.527864,17.4164079 C15.7602901,17.8001948 14.9139019,18 14.0557281,18 L9.94427191,18 C6.8913169,18 4.41640786,15.525091 4.41640786,12.472136 C4.41640786,11.6139622 4.61621302,10.767574 5,10 L7.65835921,4.68328157 C8.48060532,3.03878936 10.1614018,2 12,2 Z M7.55,13.6 C9.00633458,14.6922509 10.4936654,15.25 12,15.25 C13.5063346,15.25 14.9936654,14.6922509 16.45,13.6 L15.55,12.4 C14.3396679,13.3077491 13.1603321,13.75 12,13.75 C10.8396679,13.75 9.66033208,13.3077491 8.45,12.4 L7.55,13.6 Z"
                                                        fill="#fff" />
                                                    <path
                                                        d="M6.15999985,21.0604779 L8.15999985,17.5963763 C8.43614222,17.1180837 9.04773263,16.9542085 9.52602525,17.2303509 C10.0043179,17.5064933 10.168193,18.1180837 9.89205065,18.5963763 L7.89205065,22.0604779 C7.61590828,22.5387706 7.00431787,22.7026457 6.52602525,22.4265033 C6.04773263,22.150361 5.88385747,21.5387706 6.15999985,21.0604779 Z M17.8320512,21.0301278 C18.1081936,21.5084204 17.9443184,22.1200108 17.4660258,22.3961532 C16.9877332,22.6722956 16.3761428,22.5084204 16.1000004,22.0301278 L14.1000004,18.5660262 C13.823858,18.0877335 13.9877332,17.4761431 14.4660258,17.2000008 C14.9443184,16.9238584 15.5559088,17.0877335 15.8320512,17.5660262 L17.8320512,21.0301278 Z"
                                                        fill="#fff" opacity="0.3" />
                                                </g>
                                            </svg>

                                            <div class="card-info">
                                                <h4 class="title">{{ productsSold?.length }}</h4>
                                                <p>Refresh</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6" @click="navigateTo('invoices')" >
                                    <router-link to="/invoices" class="card card-bx card-content bg-primary">
                                        <div class="card-body">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"
                                                viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path
                                                        d="M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z"
                                                        fill="#fff" />
                                                    <path
                                                        d="M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z"
                                                        fill="#fff" fill-rule="nonzero" opacity="0.3" />
                                                </g>
                                            </svg>
                                            <div class="card-info">
                                                <h4 class="title">{{ invoices?.length }}</h4>
                                                <p>Invocies</p>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>

                            </div>
                        </div>

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
            invoices: [],
            showSideBar: false,
        }
    },
    mounted() {
        this.initiateGetProducts()
        this.initiateGetInvoices()
    },
    computed: {
        ...mapGetters(['authUser?', 'baseURL', 'isAuthenticated']),
    },

    methods: {
        ...mapActions(['getStoreProducts', 'getStoreProductsSold',"getStoreInvoices"]),
        initiateGetProducts() {
            this.getStoreProducts({ id: this.authUser?.store.id }).then((response) => {
                this.products = response.data
            }).catch((error) => {
                console.log(error)
            })

            this.getStoreProductsSold({ id: this.authUser?.store.id }).then((response) => {
                this.productsSold = response.data
            }).catch((error) => {
                console.log(error)
            })
        },
        actionShowSideBar() {
            this.showSideBar = this.showSideBar? false : true
        },
        initiateGetInvoices() {
            this.getStoreInvoices(this.authUser?.store.id).then((response) => {
                this.invoices = response.data
            }).catch(() => {
            });
        },
        navigateTo(url) {
            this.$router.push(url)
        },
        refresh() {
            location.reload()
        },
        logout(){
            localStorage.clear();
            location.reload()
        }
    }
}


</script>