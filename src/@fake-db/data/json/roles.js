/* eslint-disable global-require */
// eslint-disable-next-line camelcase
const user_roles = {
  SystemAdmin: [
    {
      actions: ['manage'],
      subject: 'all',
    },
  ],
  Admin: [
    { subject: 'User', actions: ['read'] },
    { subject: 'Role', actions: ['read'] },
    { subject: 'Forum', actions: ['read', 'add', 'update', 'void'] },
    // /
    { subject: 'Conference', actions: ['read', 'add', 'update', 'void'] },
    // /
    { subject: 'Presentation', actions: ['read', 'add', 'update', 'void'] },
  ],
  Presenter: [
    { subject: 'Auth', actions: ['read'] },
    { subject: 'PrivateForum', actions: ['read', 'add', 'update', 'void'] },
    { subject: 'PrivateForumComment', actions: ['read', 'add', 'update', 'void'] },
  ],
  Approved: [
    { subject: 'Auth', actions: ['read'] },
    { subject: 'PrivateForum', actions: ['read', 'add', 'update', 'void'] },
    { subject: 'PrivateForumComment', actions: ['read', 'add', 'update', 'void'] },
    { subject: 'PrivatePresentation', actions: ['read', 'add', 'update', 'void'] },
  ],
  SpecialGuest: [
    { subject: 'Auth', actions: ['read'] },
    { subject: 'PrivateForum', actions: ['read', 'add', 'update', 'void'] },
  ],
  Moderator: [
    { subject: 'Auth', actions: ['read'] },
    { subject: 'PrivateForum', actions: ['read', 'add', 'update', 'void'] },
    { subject: 'ForumSection', actions: ['read', 'add', 'update', 'void'] }, // Forum's Category
    { subject: 'Forum', actions: ['read', 'add', 'update', 'void'] },
  ],
}

// eslint-disable-next-line camelcase
export default user_roles
