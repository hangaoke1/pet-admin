/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: '图表',
  meta: {
    title: '图表',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'keyboard',
      meta: { title: 'Keyboard图表', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'line',
      meta: { title: 'Line图表', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'mixchart',
      meta: { title: 'Mix图表', noCache: true }
    }
  ]
}

export default chartsRouter
