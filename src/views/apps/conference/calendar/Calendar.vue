<template>
  <div class="app-calendar overflow-hidden border">
    <div class="row no-gutters">
      <!-- Sidebar -->
      <div
        class="col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column"
        :class="{'show': isCalendarOverlaySidebarActive}"
      >
        <calendar-sidebar :is-conference-handler-sidebar-active.sync="isConferenceHandlerSidebarActive" />
      </div>

      <!-- Calendar -->
      <div class="col position-relative">
        <div class="card shadow-none border-0 mb-0 rounded-0">
          <div class="card-body pb-0">
            <full-calendar
              ref="refCalendar"
              :options="calendarOptions"
              class="full-calendar"
            />
          </div>
        </div>
      </div>

      <!-- Sidebar Overlay -->
      <div
        class="body-content-overlay"
        :class="{'show': isCalendarOverlaySidebarActive}"
        @click="isCalendarOverlaySidebarActive = false"
      />
      <calendar-conference-handler
        v-model="isConferenceHandlerSidebarActive"
        :conference="conference"
        :clear-conference-data="clearConferenceData"
        @remove-conference="removeConference"
        @add-conference="addConference"
        @update-conference="updateConference"
      />
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import { onUnmounted } from '@vue/composition-api'
import store from '@/store'
import calendarStoreModule from './calendarStoreModule'
import CalendarSidebar from './calendar-sidebar/CalendarSidebar.vue'
import CalendarConferenceHandler from './calendar-conference-handler/CalendaConferenceHandler.vue'
import useCalendar from './useCalendar'

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    CalendarSidebar,
    CalendarConferenceHandler,
  },
  setup() {
    const CALENDAR_APP_STORE_MODULE_NAME = 'calendar'

    // Register module
    if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
    })

    const {
      refCalendar,
      isCalendarOverlaySidebarActive,
      conference,
      clearConferenceData,
      addConference,
      updateConference,
      removeConference,
      fetchConferences,
      refetchConferences,
      calendarOptions,

      // ----- UI ----- //
      isConferenceHandlerSidebarActive,
    } = useCalendar()

    fetchConferences()

    return {
      refCalendar,
      isCalendarOverlaySidebarActive,
      conference,
      clearConferenceData,
      addConference,
      updateConference,
      removeConference,
      refetchConferences,
      calendarOptions,

      // ----- UI ----- //
      isConferenceHandlerSidebarActive,
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/apps/calendar.scss";
</style>
