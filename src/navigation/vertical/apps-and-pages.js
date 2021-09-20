export default [
  {
    header: 'Presentation',
  },
  {
    title: 'Pending Proposal',
    route: 'apps-email',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Presentation - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Rejected',
        route: 'apps-invoice-list',
      },
      {
        title: 'Approved',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Finished',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
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
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Coming soon',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Conferences - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Early Finished',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
      {
        title: 'Top rank',
        route: { name: 'apps-invoice-edit', params: { id: 4987 } },
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
    title: 'Topic',
    route: 'apps-email',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Forum - History',
    icon: 'CheckSquareIcon',
    children: [
      {
        title: 'Popular',
        route: 'apps-invoice-list',
      },
      {
        title: 'Top rank',
        route: { name: 'apps-invoice-preview', params: { id: 4987 } },
      },
    ],
  },
  // / /
  /// /
  /// /
  {
    header: 'Documents',
  },
  {
    title: 'Video',
    route: 'apps-email',
    icon: 'CheckSquareIcon',
  },
  {
    title: 'Attachments',
    route: 'apps-email',
    icon: 'CheckSquareIcon',
  },
  {
    header: 'User Management',
  },
  {
    title: 'User',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
  {
    title: 'Role',
    route: 'apps-calendar',
    icon: 'CalendarIcon',
  },
]
