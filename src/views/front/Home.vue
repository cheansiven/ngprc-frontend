<template>
  <div>
    <front-top-menu />
    <swiper
      class="swiper-paginations"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
      style="height: 440px;"
    >
      <swiper-slide
        v-for="data in swiperData"
        :key="data.img"
      >
        <b-img
          :src="data.img"
          fluid
        />
        <div class="overlay-content">
          <h2>Welcome to Cambodia International Conference</h2>
          <h2> on Mentoring Educators</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>
    <div class="p-2">
      <h2 class="m-1">
        Popular Presenters
      </h2>
      <b-row class="match-height">
        <b-col
          v-for="speaker in speakers"
          lg="3"
          md="4"
          sm="2"
        >
          <card-speaker-profile :speaker="speaker" />
        </b-col>
      </b-row>
      <h2 class="m-1">
        New Conferences
      </h2>
      <b-row class="match-height">
        <b-col
          v-for="conference in conferences"
          lg="3"
          md="4"
          sm="2"
        >
          <card-conference :conference="conference" />
        </b-col>
      </b-row>
      <h2 class="m-1">
        Latest Forum
      </h2>
      <b-row class="match-height">
        <b-col lg="12">
          <card-forum />
        </b-col>
      </b-row>
    </div>
    <front-footer/>
  </div>
</template>

<script>
import {
  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem, BRow, BCol, BImg,
} from 'bootstrap-vue'
import AppFooter from '@core/layouts/components/AppFooter.vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import FrontTopMenu from '@/components/FrontTopMenu.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import 'swiper/css/swiper.css'
import { codeAutoplay } from '@/views/extensions/swiper/code'

import CardSpeakerProfile from '@/components/CardSpeakerProfile.vue'
import CardConference from '@/components/CardConference.vue'
import CardForum from '@/components/CardForum.vue'

export default {
  components: {
    FrontFooter,
    FrontTopMenu,
    Swiper,
    SwiperSlide,
    BImg,

    BRow,
    BCol,
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownDivider,
    BDropdownItem,

    CardSpeakerProfile,
    CardConference,
    CardForum,
    AppFooter,
  },
  data() {
    return {
      codeAutoplay,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/wide1.jpg') },
      ],
      /* eslint-disable global-require */

      speakers: [
        { avatar: require('@/assets/images/profile/user-uploads/user-01.jpg'), name: 'Cho Chanra', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-02.jpg'), name: 'Di Sona', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-03.jpg'), name: 'Ly Kumlong', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-04.jpg'), name: 'Ma Kimhuy', skill: 'Speaker' },
      ],
      conferences: [
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'THU', day: 10 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'WEB', day: 22 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'JAN', day: 15 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
      ],
    }
  },
  methods: {
  },
}
</script>
