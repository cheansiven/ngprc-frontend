export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/conference/archive',
    name: 'conference-archive',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/conference/coming-soon',
    name: 'conference-coming-soon',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/forum/popular',
    name: 'forum-popular',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/forum/new',
    name: 'forum-new',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
    },
  },
]