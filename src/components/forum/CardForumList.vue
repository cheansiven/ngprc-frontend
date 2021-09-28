<template>
  <b-card no-body>
    <!-- timeline -->
    <b-card-body>
      <app-timeline>
        <app-timeline-item v-for="l in [1,2,3,4,5,6]" variant="info" :row="l">
          <div class="d-flex justify-content-between flex-sm-row flex-column mb-sm-0 mb-1">
            <h5>Forum Topic</h5>
            <small class="timeline-item-time text-nowrap text-muted ml-1">2 day ago</small>
          </div>
          <p>Ut sed convallis mi, in maximus ante. Aliquam rhoncus suscipit. Sed luctus fringilla magna, pellentesque lacinia dui laoreet eget</p>
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
