export default [

  // *===============================================---*
  // *--------- EMAIL & IT'S FILTERS N LABELS -------------------------------*
  // *===============================================---*
  {
    path: '/admin/email',
    name: 'admin-email',
    component: () => import('@/views/admin/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
    },
  },
  {
    path: '/admin/email/:folder',
    name: 'admin-email-folder',
    component: () => import('@/views/admin/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'admin-email',
    },
    beforeEnter(to, _, next) {
      if (['sent', 'draft', 'starred', 'spam', 'trash'].includes(to.params.folder)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/admin/email/label/:label',
    name: 'admin-email-label',
    component: () => import('@/views/admin/email/Email.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'email-application',
      navActiveLink: 'admin-email',
    },
    beforeEnter(to, _, next) {
      if (['personal', 'company', 'important', 'private'].includes(to.params.label)) next()
      else next({ name: 'error-404' })
    },
  },

  // *===============================================---*
  // *--------- CHAT  ---------------------------------------*
  // *===============================================---*
  {
    path: '/admin/chat',
    name: 'admin-chat',
    component: () => import('@/views/admin/chat/Chat.vue'),
    meta: {
      contentRenderer: 'sidebar-left',
      contentClass: 'chat-application',
    },
  },

  // *===============================================---*
  // *--------- USER ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/admin/users/list',
    name: 'admin-users-list',
    component: () => import('@/views/admin/user/users-list/UsersList.vue'),
  },
  {
    path: '/admin/users/view/:id',
    name: 'admin-users-view',
    component: () => import('@/views/admin/user/users-view/UsersView.vue'),
  },
  {
    path: '/admin/users/edit/:id',
    name: 'admin-users-edit',
    component: () => import('@/views/admin/user/users-edit/UsersEdit.vue'),
  },

  // *===============================================---*
  // *--------- USER ROLE ---- ---------------------------------------*
  // *===============================================---*
  {
    path: '/admin/users/roles/list',
    name: 'admin-roles-list',
    component: () => import('@/views/admin/user/users-list/RolesList.vue'),
  },

  // *===============================================---*
  // *--------- CONFERENCE  -----------------------------------*
  // *===============================================---*
  {
    path: '/admin/conference/calendar',
    name: 'admin-conference-calendar',
    component: () => import('@/views/admin/conference/calendar/Calendar.vue'),
  },
  {
    path: '/admin/conference/coming-soon',
    name: 'admin-conference-coming-soon',
    component: () => import('@/views/admin/conference/ComingSoon.vue'),
  },
  {
    path: '/admin/conference/finished',
    name: 'admin-conference-finished',
    component: () => import('@/views/admin/conference/Finished.vue'),
  },
  {
    path: '/admin/conference/top',
    name: 'admin-conference-top',
    component: () => import('@/views/admin/conference/TopRank.vue'),
  },
  {
    path: '/admin/conference/top',
    name: 'admin-conference-top',
    component: () => import('@/views/admin/conference/TopRank.vue'),
  },
  // *===============================================---*
  // *--------- FORUM  ---------------------------------------*
  // *===============================================---*
  {
    path: '/admin/forum/popular',
    name: 'admin-forum-popular',
    component: () => import('@/views/admin/forum/Popular.vue'),
  },
  {
    path: '/admin/forum/early',
    name: 'admin-forum-early',
    component: () => import('@/views/admin/forum/Early.vue'),
  },
  // *===============================================---*
  // *--------- PRESENTATION  ---------------------------------*
  // *===============================================---*
  {
    path: '/admin/presentation/pending',
    name: 'admin-presentation-pending',
    component: () => import('@/views/admin/presentation/Pending.vue'),
  },
  {
    path: '/admin/presentation/rejected',
    name: 'admin-presentation-rejected',
    component: () => import('@/views/admin/presentation/Rejected.vue'),
  },
  {
    path: '/admin/presentation/approved',
    name: 'admin-presentation-approved',
    component: () => import('@/views/admin/presentation/Approved.vue'),
  },
  {
    path: '/admin/presentation/finished',
    name: 'admin-presentation-finished',
    component: () => import('@/views/admin/presentation/Finished.vue'),
  },
]
