

<template>
    <AuthLayout>
        <div class="page-content">

            <!-- Banner -->
            <div class="banner-wrapper shape-1">
                <div class="container inner-wrapper">
                    <h2 class="dz-title">Sign In</h2>
                    <p class="mb-0">Please sign in to access store</p>
                    <div class="alert alert-danger solid alert-dismissible fade show" v-if="errorMessage">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2"
                            fill="none" stroke-linecap="round" stroke-linejoin="round" class="me-2">
                            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2">
                            </polygon>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                        {{ errorMessage }}
                        <button class="btn-close" data-bs-dismiss="alert" aria-label="btn-close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Banner End -->

            <div class="container">
                <div class="account-area">
                    <form class="">
                        <div class="input-group">
                            <input type="text" placeholder="User Name" v-model="email" class="form-control">
                        </div>
                        <div class="input-group">
                            <input type="password" placeholder="Password" v-model="password" id="dz-password"
                                class="form-control be-0">
                            <span class="input-group-text show-pass">
                                <i class="fa fa-eye-slash"></i>
                                <i class="fa fa-eye"></i>
                            </span>
                        </div>
                        <a href="forgot-password.html" class="btn-link d-block text-center">Forgot your password?</a>
                        <div class="input-group">
                            <a href="#" @click.prevent="actionLogin()" class="btn mt-2 btn-primary w-100 btn-rounded">
                                <span class="spinner-border me-3 spinner-border-sm" v-if="loading" role="status"
                                    aria-hidden="true"></span>
                                {{ loading? '....': 'Login' }}</a>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </AuthLayout>
</template>
<script>
import AuthLayout from '../layouts/AuthLayout.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        AuthLayout
    },
    data() {
        return {
            loading: false,
            email: "tatenda@gmail.com",
            password: "password"
        }
    },
    computed: {
        ...mapGetters([
            "errorMessage"
        ])
    },
    methods: {
        ...mapActions({
            login: 'login'
        }),

        actionLogin() {
            this.loading = true;
            this.login({ email: this.email, password: this.password }).then(data => {
                console.log('zvapera')
                this.loading = false
            })
        }
    }
}
</script>