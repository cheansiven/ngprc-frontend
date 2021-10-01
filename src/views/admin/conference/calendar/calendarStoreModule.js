import axios from '@axios'

export default {
  namespaced: true,
  state: {
    calendarOptions: [
      {
        color: 'danger',
        label: 'Conference',
      },
      {
        color: 'primary',
        label: 'Symposium',
      },
      {
        color: 'warning',
        label: 'Seminar',
      },
      {
        color: 'success',
        label: 'Colloquium',
      },
      {
        color: 'info',
        label: 'Workshop',
      },
    ],
    selectedCalendars: ['Workshop', 'Seminar', 'Symposium'],
  },
  getters: {},
  mutations: {
    SET_SELECTED_EVENTS(state, val) {
      state.selectedCalendars = val
    },
  },
  actions: {
    fetchConferences(ctx, { calendars }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/calendar/conferences', {
            params: {
              calendars: calendars.join(','),
            },
          })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addConference(ctx, { conference }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/calendar/conferences', { conference })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateConference(ctx, { conference }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/apps/calendar/conferences/${conference.id}`, { conference })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeConference(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/calendar/conferences/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
