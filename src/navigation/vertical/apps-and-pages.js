export default [
  {
    header: 'Presentation',
  },
  {
    title: 'Pending Proposal',
    route: 'apps-presentation-pending',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Presentation - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Rejected',
        route: 'apps-presentation-rejected',
      },
      {
        title: 'Approved',
        route: 'apps-presentation-approved',
      },
      {
        title: 'Finished',
        route: 'apps-presentation-finished',
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
    route: 'apps-conference-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Coming soon',
    route: 'apps-conference-coming-soon',
    icon: 'CalendarIcon',
  },
  {
    title: 'Conferences - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Early Finished',
        route: { name: 'apps-conference-finished' },
      },
      {
        title: 'Top rank',
        route: { name: 'apps-conference-top' },
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
    title: 'Popular',
    route: 'apps-forum-popular',
  },
  {
    title: 'Early',
    route: 'apps-forum-early',
  },
  // / /
  /// /
  /// /
  {
    header: 'User Management',
  },
  {
    title: 'User',
    route: 'apps-users-list',
    icon: 'CalendarIcon',
  },
  {
    title: 'Role',
    route: 'apps-roles-list',
    icon: 'CalendarIcon',
  },
]
