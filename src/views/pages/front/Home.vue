<template>
  <div>
    <nav id="top-menu">
      <b-img src="@/assets/images/logo/logo.png" />
      <b-nav
        align="right"
        class="top-menu"
      >
        <b-nav-item active>
          Home
        </b-nav-item>
        <b-nav-item>Presentation</b-nav-item>
        <b-nav-item>Presenter</b-nav-item>
        <b-nav-item>Conferences</b-nav-item>
        <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Achievements"
          toggle-class="nav-link-custom"
          right
        >
          <b-dropdown-item>Medias</b-dropdown-item>
          <b-dropdown-item>Video</b-dropdown-item>
          <b-dropdown-divider/>
          <b-dropdown-item>Blog</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </nav>
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
          <h2>Welcome to the Biggest</h2>
          <h2>Creative Design Conference</h2>
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
      <h2 class="m-1">Popular Presenters</h2>
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
      <h2 class="m-1">New Conferences</h2>
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
      <h2 class="m-1">Latest Forum</h2>
      <b-row class="match-height">
        <b-col lg="12">
          <card-forum />
        </b-col>
      </b-row>
    </div>
    <div class="p-4 sub-footer">
      <b-row>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">Organizing commitee</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-gray-600">Olaf Rymsberg</li>
            <li class="hover:text-orange text-gray-600">Diana Feinholm</li>
            <li class="hover:text-orange text-gray-600">Wei Li Chan</li>
          </ul>
        </b-col>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">Legal information</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-gray-600">Privacy Statement</li>
            <li class="hover:text-orange text-gray-600">Impressum</li>
          </ul>
        </b-col>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">Support</div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-gray-600">Technical support</li>
            <li class="hover:text-orange text-gray-600">Contact the organizers</li>
          </ul>
        </b-col>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">Newsletter</div>
          <p class="text-gray-600 leading-normal">Put yourself on the mailing list. </p>
          <div class="mt-4 flex">
            <input type="text" style="border-radius: 2px" class="p-2 border border-gray-200 round text-gray-700 text-sm h-auto" placeholder="Your email address">
            <button class="bg-gray-800 text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
          </div>
        </b-col>
      </b-row>
    </div>
    <footer
        class="footer footer-light"
        :class="['footer-static']"
    >
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>
  </div>
</template>

<script>
import {
  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem, BRow, BCol, BImg,
} from 'bootstrap-vue'
import AppFooter from '@core/layouts/components/AppFooter'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { codeAutoplay } from '@/views/extensions/swiper/code'

import CardSpeakerProfile from '@/components/CardSpeakerProfile.vue'
import CardConference from '@/components/CardConference.vue'
import CardForum from '@/components/CardForum.vue'


export default {
  components: {

    Swiper,
    SwiperSlide,
    BCardCode,
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
}
</script>
