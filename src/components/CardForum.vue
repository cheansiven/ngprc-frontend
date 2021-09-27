<template>
  <b-card no-body>
    <b-card-header>
      <div class="d-flex align-items-center">
        <feather-icon
          size="24"
          class="mr-1"
          icon="ListIcon"
        />
        <b-card-title class="ml-25">
          Latest Forum
        </b-card-title>
      </div>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
      />
    </b-card-header>

    <!-- timeline -->
    <b-card-body>
      <app-timeline>
        <app-timeline-item variant="info">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Nam et lorem eget urna</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">12 minutes ago</small>
          </div>
          <p>Suspendisse dapibus interdum ultricies. Aenean laoreet ante urna...</p>
          <b-avatar-group size="35px">
            <b-avatar
              v-for="avatar in avatars"
              :key="avatar.userImg"
              v-b-tooltip.hover.top="'Tooltip!'"
              :src="avatar.userImg"
              class="pull-up"
            />
          </b-avatar-group>
        </app-timeline-item>
        <app-timeline-item variant="info">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Nam et lorem eget urna</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">12 minutes ago</small>
          </div>
          <p>Suspendisse dapibus interdum ultricies. Aenean laoreet ante urna...</p>
          <b-avatar-group size="35px">
            <b-avatar
              v-for="avatar in avatars"
              :key="avatar.userImg"
              v-b-tooltip.hover.top="'Tooltip!'"
              :src="avatar.userImg"
              class="pull-up"
            />
          </b-avatar-group>
        </app-timeline-item>
        <app-timeline-item variant="info">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h6>Nam et lorem eget urna</h6>
            <small class="timeline-item-time text-nowrap text-muted ml-1">12 minutes ago</small>
          </div>
          <p>Suspendisse dapibus interdum ultricies. Aenean laoreet ante urna...</p>
          <b-avatar-group size="35px">
            <b-avatar
              v-for="avatar in avatars"
              :key="avatar.userImg"
              v-b-tooltip.hover.top="'Tooltip!'"
              :src="avatar.userImg"
              class="pull-up"
            />
          </b-avatar-group>
        </app-timeline-item>

      </app-timeline>
      <!--/ timeline -->
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BImg, BMedia, BMediaBody, BMediaAside, BAvatar, BAvatarGroup, VBTooltip,
} from 'bootstrap-vue'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardHeader,
    BCardTitle,
    AppTimeline,
    AppTimelineItem,
    BMedia,
    BAvatar,
    BMediaBody,
    BMediaAside,
    BAvatarGroup,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      avatars: [
        { userImg: require('@/assets/images/portrait/small/avatar-s-9.jpg'), name: 'Billy Hopkins' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-6.jpg'), name: 'Amy Carson' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-8.jpg'), name: 'Brandon Miles' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-7.jpg'), name: 'Daisy Weber' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-20.jpg'), name: 'Jenny Looper' },
      ],
    }
  },
}
</script>
