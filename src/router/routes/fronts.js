export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: () => import('@/views/pages/front/Presentation.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/presenter',
    name: 'presenter',
    component: () => import('@/views/pages/front/Presenter.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/conference',
    name: 'conference',
    component: () => import('@/views/pages/front/Conference.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/conference/archive',
    name: 'conference-archive',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/conference/coming-soon',
    name: 'conference-coming-soon',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/forum/popular',
    name: 'forum-popular',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/forum/new',
    name: 'forum-new',
    component: () => import('@/views/pages/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/pages/front/blog/BlogList.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
]
