export default [
  {
    path: '/user/profile',
    name: 'user-profile',
    component: () => import('@/views/user/profile/Profile.vue'),
  },
  {
    path: '/user/setting',
    name: 'user-setting',
    component: () => import('@/views/user/setting/AccountSetting.vue'),
  },
  {
    path: '/user/email',
    name: 'user-email',
    component: () => import('@/views/user/email/Email.vue'),
  },
  {
    path: '/user/chat',
    name: 'user-chat',
    component: () => import('@/views/user/chat/Chat.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'chat-application',
    },
  },

]
