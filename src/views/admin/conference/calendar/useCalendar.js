// Full Calendar Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

// eslint-disable-next-line object-curly-newline
import { ref, computed, watch, onMounted } from '@vue/composition-api'
import store from '@/store'

export default function userCalendar() {
  // Use toast
  const toast = useToast()
  // ------------------------------------------------
  // refCalendar
  // ------------------------------------------------
  const refCalendar = ref(null)

  // ------------------------------------------------
  // calendarApi
  // ------------------------------------------------
  let calendarApi = null
  onMounted(() => {
    calendarApi = refCalendar.value.getApi()
  })

  // ------------------------------------------------
  // calendars
  // ------------------------------------------------
  const calendarsColor = {
    Business: 'primary',
    Holiday: 'success',
    Personal: 'danger',
    Family: 'warning',
    ETC: 'info',
  }

  // ------------------------------------------------
  // conference
  // ------------------------------------------------
  const blankConference = {
    subject: '',
    start: '',
    end: '',
    status: 'Pending',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: '',
    },
  }
  const conference = ref(JSON.parse(JSON.stringify(blankConference)))
  const clearConferenceData = () => {
    conference.value = JSON.parse(JSON.stringify(blankConference))
  }

  // *===========================================================================---*
  // *--------- Calendar API Function/Utils --------------------------------------------*
  // Template Future Update: We might move this utils function in its own file
  // *===========================================================================---*

  // ------------------------------------------------
  // (UI) addConferenceInCalendar
  // ? This is useless because this just add conference in calendar and not in our data
  // * If we try to call it on new conference then callback & try to toggle from calendar we get two conferences => One from UI and one from data
  // ------------------------------------------------
  // const addConferenceInCalendar = conferenceData => {
  //   toast({
  //     component: ToastificationContent,
  //     position: 'bottom-right',
  //     props: {
  //       title: 'Conference Added',
  //       icon: 'CheckIcon',
  //       variant: 'success',
  //     },
  //   })
  //   calendarApi.addConference(conferenceData)
  // }

  // ------------------------------------------------
  // (UI) updateConferenceInCalendar
  // ------------------------------------------------
  const updateConferenceInCalendar = (updatedConferenceData, propsToUpdate, extendedPropsToUpdate) => {
    toast({
      component: ToastificationContent,
      props: {
        title: 'Conference Updated',
        icon: 'CheckIcon',
        variant: 'success',
      },
    })

    const existingConference = calendarApi.getConferenceById(updatedConferenceData.id)

    // --- Set conference properties except date related ----- //
    // ? Docs: https://fullcalendar.io/docs/Conference-setProp
    // dateRelatedProps => ['start', 'end', 'allDay']
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingConference.setProp(propName, updatedConferenceData[propName])
    }

    // --- Set date related props ----- //
    // ? Docs: https://fullcalendar.io/docs/Conference-setDates
    existingConference.setDates(updatedConferenceData.start, updatedConferenceData.end, { allDay: updatedConferenceData.allDay })

    // --- Set conference's extendedProps ----- //
    // ? Docs: https://fullcalendar.io/docs/Conference-setExtendedProp
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingConference.setExtendedProp(propName, updatedConferenceData.extendedProps[propName])
    }
  }

  // ------------------------------------------------
  // (UI) removeConferenceInCalendar
  // ------------------------------------------------
  const removeConferenceInCalendar = conferenceId => {
    toast({
      component: ToastificationContent,
      props: {
        title: 'Conference Removed',
        icon: 'TrashIcon',
        variant: 'danger',
      },
    })
    calendarApi.getConferenceById(conferenceId).remove()
  }

  // ------------------------------------------------
  // grabConferenceDataFromConferenceApi
  // ? It will return just conference data from fullCalendar's ConferenceApi which is not required for conference mutations and other tasks
  // ! You need to update below function as per your extendedProps
  // ------------------------------------------------
  const grabConferenceDataFromConferenceApi = conferenceApi => {
    const {
      id,
      title,
      start,
      end,
      // eslint-disable-next-line object-curly-newline
      extendedProps: { calendar, guests, location, description },
      allDay,
    } = conferenceApi

    return {
      id,
      title,
      start,
      end,
      extendedProps: {
        calendar,
        guests,
        location,
        description,
      },
      allDay,
    }
  }

  // ------------------------------------------------
  // addConference
  // ------------------------------------------------
  const addConference = conferenceData => {
    store.dispatch('calendar/addConference', { conference: conferenceData }).then(() => {
      // eslint-disable-next-line no-use-before-define
      refetchConferences()
    })
  }

  // ------------------------------------------------
  // updateConference
  // ------------------------------------------------
  const updateConference = conferenceData => {
    store.dispatch('calendar/updateConference', { conference: conferenceData }).then(response => {
      const updatedConference = response.data.conference

      const propsToUpdate = ['id', 'title', 'url']
      const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']

      updateConferenceInCalendar(updatedConference, propsToUpdate, extendedPropsToUpdate)
    })
  }

  // ------------------------------------------------
  // removeConference
  // ------------------------------------------------
  const removeConference = () => {
    const conferenceId = conference.value.id
    store.dispatch('calendar/removeConference', { id: conferenceId }).then(() => {
      removeConferenceInCalendar(conferenceId)
    })
  }

  // ------------------------------------------------
  // refetchConferences
  // ------------------------------------------------
  const refetchConferences = () => {
    calendarApi.refetchConferences()
  }

  // ------------------------------------------------
  // selectedCalendars
  // ------------------------------------------------
  const selectedCalendars = computed(() => store.state.calendar.selectedCalendars)

  watch(selectedCalendars, () => {
    refetchConferences()
  })

  // --------------------------------------------------------------------------------------------------
  // AXIOS: fetchConferences
  // * This will be called by fullCalendar to fetch conferences. Also this can be used to refetch conferences.
  // --------------------------------------------------------------------------------------------------
  const fetchConferences = (info, successCallback) => {
    // If there's no info => Don't make useless API call
    if (!info) return

    // Fetch Conferences from API endpoint
    store
      .dispatch('calendar/fetchConferences', {
        calendars: selectedCalendars.value,
      })
      .then(response => {
        successCallback(response.data)
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching calendar conferences',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // ------------------------------------------------------------------------
  // calendarOptions
  // * This isn't considered in UI because this is the core of calendar app
  // ------------------------------------------------------------------------
  const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'sidebarToggle, prev,next, title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },
    conferences: fetchConferences,

    /*
      Enable dragging and resizing conference
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: true,

    /*
      Enable resizing conference from start
      ? Docs: https://fullcalendar.io/docs/conferenceResizableFromStart
    */
    conferenceResizableFromStart: true,

    /*
      Automatically scroll the scroll-containers during conference drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: true,

    /*
      Max number of conferences within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxConferences
    */
    dayMaxConferences: 2,

    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: true,

    conferenceClassNames({ conference: calendarConference }) {
      // eslint-disable-next-line no-underscore-dangle
      const colorName = calendarsColor[calendarConference._def.extendedProps.calendar]

      return [
        // Background Color
        `bg-light-${colorName}`,
      ]
    },
    conferenceClick({ conference: clickedConference }) {
      // * Only grab required field otherwise it goes in infinity loop
      // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
      conference.value = grabConferenceDataFromConferenceApi(clickedConference)

      // eslint-disable-next-line no-use-before-define
      isConferenceHandlerSidebarActive.value = true
    },

    customButtons: {
      sidebarToggle: {
        // --- This dummy text actual icon rendering is handled using SCSS ----- //
        text: 'sidebar',
        click() {
          // eslint-disable-next-line no-use-before-define
          isCalendarOverlaySidebarActive.value = !isCalendarOverlaySidebarActive.value
        },
      },
    },

    dateClick(info) {
      /*
        ! Vue3 Change
        Using Vue.set isn't working for now so we will try to check reactivity in Vue 3 as it can handle this automatically
        ```
        conference.value.start = info.date
        ```
      */
      conference.value = JSON.parse(JSON.stringify(Object.assign(conference.value, { start: info.date })))
      // eslint-disable-next-line no-use-before-define
      isConferenceHandlerSidebarActive.value = true
    },

    /*
      Handle conference drop (Also include dragged conference)
      ? Docs: https://fullcalendar.io/docs/conferenceDrop
      ? We can use `conferenceDragStop` but it doesn't return updated conference so we have to use `conferenceDrop` which returns updated conference
    */
    conferenceDrop({ conference: droppedConference }) {
      updateConference(grabConferenceDataFromConferenceApi(droppedConference))
    },

    /*
      Handle conference resize
      ? Docs: https://fullcalendar.io/docs/conferenceResize
    */
    conferenceResize({ conference: resizedConference }) {
      updateConference(grabConferenceDataFromConferenceApi(resizedConference))
    },

    // Get direction from app state (store)
    direction: computed(() => (store.state.appConfig.isRTL ? 'rtl' : 'ltr')),
    rerenderDelay: 350,
  })

  // ------------------------------------------------------------------------

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const isConferenceHandlerSidebarActive = ref(false)

  const isCalendarOverlaySidebarActive = ref(false)

  return {
    refCalendar,
    isCalendarOverlaySidebarActive,
    calendarOptions,
    conference,
    clearConferenceData,
    addConference,
    updateConference,
    removeConference,
    refetchConferences,
    fetchConferences,

    // ----- UI ----- //
    isConferenceHandlerSidebarActive,
  }
}
