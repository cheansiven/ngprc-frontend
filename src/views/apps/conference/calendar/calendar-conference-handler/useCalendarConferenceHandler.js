import { ref, computed, watch } from '@vue/composition-api'
import store from '@/store'

export default function useCalendarConferenceHandler(props, clearForm, emit) {
  // ------------------------------------------------
  // conferenceLocal
  // ------------------------------------------------
  const conferenceLocal = ref(JSON.parse(JSON.stringify(props.conference.value)))
  const resetConferenceLocal = () => {
    conferenceLocal.value = JSON.parse(JSON.stringify(props.conference.value))
  }
  watch(props.conference, () => {
    resetConferenceLocal()
  })

  // ------------------------------------------------
  // isConferenceHandlerSidebarActive
  // * Clear form if sidebar is closed
  // ------------------------------------------------
  watch(props.isConferenceHandlerSidebarActive, val => {
    // ? Don't reset conference till transition is finished
    if (!val) {
      setTimeout(() => {
        clearForm.value()
      }, 350)
    }
  })
  // ------------------------------------------------
  // calendarOptions
  // ------------------------------------------------
  const calendarOptions = computed(() => store.state.calendar.calendarOptions)

  const onSubmit = () => {
    const conferenceData = JSON.parse(JSON.stringify(conferenceLocal))

    // * If conference has id => Edit Conference
    // Emit conference for add/update conference
    if (props.conference.value.id) emit('update-conference', conferenceData.value)
    else emit('add-conference', conferenceData.value)

    // Close sidebar
    emit('update:is-conference-handler-sidebar-active', false)
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  // ------------------------------------------------
  // guestOptions
  // ------------------------------------------------

  /* eslint-disable global-require */
  const guestsOptions = [
    { avatar: require('@/assets/images/avatars/1-small.png'), name: 'Jane Foster' },
    { avatar: require('@/assets/images/avatars/3-small.png'), name: 'Donna Frank' },
    { avatar: require('@/assets/images/avatars/5-small.png'), name: 'Gabrielle Robertson' },
    { avatar: require('@/assets/images/avatars/7-small.png'), name: 'Lori Spears' },
    { avatar: require('@/assets/images/avatars/9-small.png'), name: 'Sandy Vega' },
    { avatar: require('@/assets/images/avatars/11-small.png'), name: 'Cheryl May' },
  ]
  /* eslint-enable global-require */

  return {
    conferenceLocal,
    resetConferenceLocal,
    calendarOptions,

    // UI
    guestsOptions,
    onSubmit,
  }
}
