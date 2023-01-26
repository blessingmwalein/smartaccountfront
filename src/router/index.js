import Home from '@/views/pages/Home.vue'
import Login from '@/views/pages/Login.vue'
import Products from '@/views/pages/Products.vue'
import Invoices from '@/views/pages/Invoices.vue'
import Sell from '@/views/pages/Sell.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '@/middleware/auth'
import log from '@/middleware/log'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: log,
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      middleware: log,
    },
  },
  {
    path: '/sell',
    name: 'Sell',
    component: Sell,
    meta: {
      middleware: log,
    },
  },
  {
    path: '/invoices',
    name: 'Invocies',
    component: Invoices,
    meta: {
      middleware: log,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router
