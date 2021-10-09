export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/presentation',
    name: 'presentation',
    component: () => import('@/views/front/Presentation.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/presenter',
    name: 'presenter',
    component: () => import('@/views/front/Presenter.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/presenter/:id',
    name: 'presenter-profile',
    component: () => import('@/views/front/presenter-profile/Profile.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/conference',
    name: 'conference',
    component: () => import('@/views/front/Conference.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/conference/archive',
    name: 'conference-archive',
    component: () => import('@/views/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/conference/coming-soon',
    name: 'conference-coming-soon',
    component: () => import('@/views/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/forum/popular',
    name: 'forum-popular',
    component: () => import('@/views/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/forum/new',
    name: 'forum-new',
    component: () => import('@/views/front/Home.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/front/blog/BlogList.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
    },
  },
]
