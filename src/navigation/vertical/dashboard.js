export default [
  {
    header: 'Presentation',
    resource: 'Presentation',
    action: 'read',
  },
  {
    title: 'Pending Proposal',
    route: 'admin-presentation-pending',
    icon: 'CheckSquareIcon',
    resource: 'Presentation',
    action: 'read',
  },
  {
    title: 'Presentation - History',
    icon: 'CheckSquareIcon',
    resource: 'Presentation',
    action: 'read',
    children: [
      {
        title: 'Rejected',
        route: 'admin-presentation-rejected',
        resource: 'Presentation',
        action: 'read',
      },
      {
        title: 'Approved',
        route: 'admin-presentation-approved',
        resource: 'Presentation',
        action: 'read',
      },
      {
        title: 'Finished',
        route: 'admin-presentation-finished',
        resource: 'Presentation',
        action: 'read',
      },
    ],
  },
  /// /
  /// /
  /// /
  {
    header: 'Conferences',
    resource: 'Conference',
    action: 'read',
  },
  {
    title: 'Calendar',
    route: 'admin-conference-calendar',
    icon: 'CalendarIcon',
    resource: 'Conference',
    action: 'read',
  },
  {
    title: 'Coming soon',
    route: 'admin-conference-coming-soon',
    icon: 'CalendarIcon',
    resource: 'Conference',
    action: 'read',
  },
  {
    title: 'Conferences - History',
    icon: 'CheckSquareIcon',
    resource: 'Conference',
    action: 'read',
    children: [
      {
        title: 'Early Finished',
        route: 'admin-conference-finished',
        resource: 'Conference',
        action: 'read',
      },
      {
        title: 'Top rank',
        route: 'admin-conference-top',
        resource: 'Conference',
        action: 'read',
      },
    ],
  },
  /// /
  /// /
  /// /
  {
    header: 'Forum',
    resource: 'Forum',
    action: 'read',
  },
  {
    icon: 'CalendarIcon',
    title: 'Popular',
    route: 'admin-forum-popular',
    resource: 'Forum',
    action: 'read',
  },
  {
    icon: 'CalendarIcon',
    title: 'Early',
    route: 'admin-forum-early',
    resource: 'Forum',
    action: 'read',
  },
  // / /
  /// /
  /// /
  {
    header: 'User Management',
    resource: 'User',
    action: 'read',
  },
  {
    title: 'User',
    route: 'admin-users-list',
    icon: 'CalendarIcon',
    resource: 'User',
    action: 'read',
  },
  {
    title: 'Role',
    route: 'admin-roles-list',
    icon: 'CalendarIcon',
    resource: 'User',
    action: 'read',
  },
]
