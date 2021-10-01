export default [
  {
    header: 'Presentation',
  },
  {
    title: 'Pending Proposal',
    route: 'admin-presentation-pending',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Presentation - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Rejected',
        route: 'admin-presentation-rejected',
      },
      {
        title: 'Approved',
        route: 'admin-presentation-approved',
      },
      {
        title: 'Finished',
        route: 'admin-presentation-finished',
      },
    ],
  },
  /// /
  /// /
  /// /
  {
    header: 'Conferences',
  },
  {
    title: 'Calendar',
    route: 'admin-conference-calendar',
    icon: 'CalendarIcon',
    resource: 'all-conference',
    action: 'manage',
  },
  {
    title: 'Coming soon',
    route: 'admin-conference-coming-soon',
    icon: 'CalendarIcon',
  },
  {
    title: 'Conferences - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Early Finished',
        route: 'admin-conference-finished',
        resource: 'all-conference',
        action: 'read',
      },
      {
        title: 'Top rank',
        route: 'admin-conference-top',
        resource: 'all-conference',
        action: 'read',
      },
    ],
  },
  /// /
  /// /
  /// /
  {
    header: 'Forum',
  },
  {
    icon: 'CalendarIcon',
    title: 'Popular',
    route: 'admin-forum-popular',
    resource: 'all-forum',
    action: 'read',
  },
  {
    icon: 'CalendarIcon',
    title: 'Early',
    route: 'admin-forum-early',
    resource: 'all-forum',
    action: 'read',
  },
  // / /
  /// /
  /// /
  {
    header: 'User Management',
  },
  {
    title: 'User',
    route: 'admin-users-list',
    icon: 'CalendarIcon',
    resource: 'user',
    action: 'read',
  },
  {
    title: 'Role',
    route: 'admin-roles-list',
    icon: 'CalendarIcon',
    resource: 'user',
    action: 'read',
  },
]
