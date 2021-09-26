<template>
  <div>
    <nav id="top-menu">
      <b-img src="@/assets/images/logo/logo.png"/>
      <b-nav align="right" class="top-menu">
      <b-nav-item active>
        Active
      </b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Dropdown"
          toggle-class="nav-link-custom"
          right
      >
        <b-dropdown-item>One</b-dropdown-item>
        <b-dropdown-item>Two</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item>Three</b-dropdown-item>
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
    <div class="p-4">
      <b-row class="match-height">
        <b-col
            lg="3"
            md="4"
            sm="2"
            v-for="prensentor in [1,2,3,4,5,6]"
        >
          <card-advance-profile />
        </b-col>
      </b-row>
      <b-row class="match-height">
        <b-col
            lg="3"
            md="4"
            sm="2"
            v-for="prensentor in [1,2,3,4,5,6]"
        >
          <card-advance-meetup />
        </b-col>
      </b-row>
      <b-row class="match-height">
      <b-col lg="12">
        <card-advance-timeline />
      </b-col>
      </b-row>
      <b-row class="match-height">
        <b-col
            lg="7"
            md="6"
        >
          <card-advance-congratulation />
        </b-col>
        <b-col
            lg="5"
            md="6"
        >
          <card-advance-medal />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-employee-task />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-meetup />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-profile />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-job />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-transactions />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-pay-amount />
        </b-col>

        <!-- Timeline -->
        <b-col lg="8">
          <card-advance-timeline />
        </b-col>

        <!-- Chat -->
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-chat />
        </b-col>

        <b-col
            lg="4"
            md="6"
        >
          <card-advance-bussiness-sharks />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-browser-states />
        </b-col>
        <b-col
            lg="4"
            md="6"
        >
          <card-advance-app-design />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem, BRow, BCol, BImg,
} from 'bootstrap-vue'

import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { codeAutoplay } from '@/views/extensions/swiper/code'

import CardAdvanceCongratulation from '@/views/card/card-advance/CardAdvanceCongratulation.vue'
import CardAdvanceMedal from '@/views/card/card-advance/CardAdvanceMedal.vue'
import CardAdvanceEmployeeTask from '@/views/card/card-advance/CardAdvanceEmployeeTask.vue'
import CardAdvanceMeetup from '@/views/card/card-advance/CardAdvanceMeetup.vue'
import CardAdvanceProfile from '@/views/card/card-advance/CardAdvanceProfile.vue'
import CardAdvanceJob from '@/views/card/card-advance/CardAdvanceJob.vue'
import CardAdvanceTransactions from '@/views/card/card-advance/CardAdvanceTransactions.vue'
import CardAdvancePayAmount from '@/views/card/card-advance/CardAdvancePayAmount.vue'
import CardAdvanceBussinessSharks from '@/views/card/card-advance/CardAdvanceBussinessSharks.vue'
import CardAdvanceBrowserStates from '@/views/card/card-advance/CardAdvanceBrowserStates.vue'
import CardAdvanceAppDesign from '@/views/card/card-advance/CardAdvanceAppDesign.vue'
import CardAdvanceTimeline from '@/views/card/card-advance/CardAdvanceTimeline.vue'
import CardAdvanceChat from '@/views/card/card-advance/CardAdvanceChat.vue'

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

    CardAdvanceCongratulation,
    CardAdvanceMedal,
    CardAdvanceEmployeeTask,
    CardAdvanceMeetup,
    CardAdvanceProfile,
    CardAdvanceJob,
    CardAdvanceTransactions,
    CardAdvancePayAmount,
    CardAdvanceBussinessSharks,
    CardAdvanceBrowserStates,
    CardAdvanceAppDesign,
    CardAdvanceTimeline,
    CardAdvanceChat,
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
    }
  },
}
</script>
