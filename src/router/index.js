import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import CashierLayout from '@/layout/CashierLayout'

/* Router Modules */
// import chartsRouter from './modules/charts'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/userCenter',
    component: () => import('@/views/user/center'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/product',
    component: Layout,
    meta: { title: '商品服务', icon: 'guide', affix: false },
    children: [
      {
        path: 'list',
        component: () => import('@/views/product/index'),
        name: 'Product',
        meta: { title: '商品列表', affix: false }
      },
      {
        path: '/product/category',
        component: () => import('@/views/category/index'),
        name: 'Category',
        meta: { title: '商品分类', affix: false }
      },
      {
        path: 'create',
        hidden: true,
        component: () => import('@/views/product/create'),
        name: 'ProductCreate',
        meta: { title: '商品新增', affix: false }
      },
      {
        path: 'edit/:productId',
        hidden: true,
        component: () => import('@/views/product/edit'),
        name: 'ProductEdit',
        meta: { title: '商品编辑', affix: false }
      },
      {
        path: '/product/service',
        component: () => import('@/views/product/service'),
        name: 'Service',
        meta: { title: '服务管理', affix: false }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/cashOrder',
    meta: { title: '订单管理', icon: 'shopping', affix: false },
    children: [
      {
        path: 'cashOrder',
        component: () => import('@/views/order/cashOrder'),
        name: 'CashOrder',
        meta: { title: '收银台订单', icon: '', affix: false }
      },
      {
        path: 'onlineOrder',
        component: () => import('@/views/order/onlineOrder'),
        name: 'OnlineOrder',
        meta: { title: '线上订单', icon: '', affix: false }
      },
      {
        path: 'onlineOrderDetail',
        component: () => import('@/views/order/onlineOrderDetail'),
        name: 'OnlineOrderDetail',
        hidden: true,
        meta: { title: '订单详情', icon: '', affix: false, noCache: true }
      },
      {
        path: 'subscribeOrder',
        component: () => import('@/views/order/subscribeOrder'),
        name: 'SubscribeOrder',
        meta: { title: '预约订单', icon: '', affix: false }
      }
    ]
  },
  {
    path: '/grew',
    component: Layout,
    redirect: '/grew/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/grew/index'),
        name: 'Grew',
        meta: { title: '寄养申请', icon: 'bug', affix: false }
      }
    ]
  },
  {
    path: '/store',
    component: Layout,
    redirect: '/publish/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/store/index'),
        name: 'Store',
        meta: { title: '门店管理', icon: 'tree', affix: false }
      }
    ]
  },
  {
    path: '/device',
    component: Layout,
    redirect: '/device/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/device/index'),
        name: 'Device',
        meta: { title: '监控管理', icon: 'eye-open', affix: false }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/notice',
    meta: { title: '设置', icon: 'example', affix: false },
    children: [
      {
        path: 'notice',
        component: () => import('@/views/setting/notice'),
        name: 'Notice',
        meta: { title: '公告设置', icon: '', affix: false }
      },
      {
        path: 'banner',
        component: () => import('@/views/setting/banner'),
        name: 'Banner',
        meta: { title: '轮播设置', icon: '', affix: false }
      },
      {
        path: 'print',
        component: () => import('@/views/setting/print'),
        name: 'Print',
        meta: { title: '打印设置', icon: '', affix: false }
      }
    ]
  },
  {
    path: '/cashier',
    component: CashierLayout,
    redirect: '/cashier/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/cashier/index'),
        name: 'Cashier',
        meta: { title: '收银台', icon: '', affix: false }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  // chartsRouter,

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
