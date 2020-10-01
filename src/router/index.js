import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    path: '/banner',
    component: Layout,
    redirect: '/banner/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/banner/index'),
        name: 'Banner',
        meta: { title: '轮播管理', icon: 'example', affix: false }
      }
    ]
  },
  {
    path: '/notice',
    component: Layout,
    redirect: '/notice/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/notice/index'),
        name: 'Notice',
        meta: { title: '公告管理', icon: 'star', affix: false }
      }
    ]
  },
  {
    path: '/category',
    component: Layout,
    redirect: '/category/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/category/index'),
        name: 'Category',
        meta: { title: '分类管理', icon: 'eye-open', affix: false }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/product/index'),
        name: 'Product',
        meta: { title: '商品管理', icon: 'shopping', affix: false }
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
      }
    ]
  },
  {
    path: '/shopOrder',
    component: Layout,
    redirect: '/shopOrder/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/shopOrder/index'),
        name: 'ShopOrder',
        meta: { title: '商城订单', icon: 'form', affix: false }
      }
    ]
  },
  {
    path: '/storeOrder',
    component: Layout,
    redirect: '/storeOrder/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/storeOrder/index'),
        name: 'StoreOrder',
        meta: { title: '门店订单', icon: 'list', affix: false }
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
        meta: { title: '门店管理', icon: 'dianpu', affix: false }
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
        meta: { title: '寄养管理', icon: 'jiyang', affix: false }
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
        meta: { title: '监控管理', icon: 'jiankong', affix: false }
      }
    ]
  },
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'permission',
  //   meta: {
  //     title: '权限管理',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'pagePermission',
  //       meta: {
  //         title: '页面权限',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     }
  //   ]
  // },

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
