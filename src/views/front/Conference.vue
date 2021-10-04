<template>
  <div>
    <front-top-menu :isStatic="true" />
    <div class="p-2">
      <h2 class="m-1">
        Conference
      </h2>
      <b-row class="match-height">
        <b-col
            v-for="presentation in presentations"
            lg="3"
            md="4"
            sm="2"
        >
          <card-conference :conference="presentation" />
        </b-col>
      </b-row>
    </div>
    <front-footer/>
  </div>
</template>

<script>
import {
  BRow, BCol, BImg,
} from 'bootstrap-vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import FrontTopMenu from '@/components/FrontTopMenu.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import 'swiper/css/swiper.css'
import { codeAutoplay } from '@/views/extensions/swiper/code'

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
    CardConference,
    CardForum,
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
      presentations: [
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'THU', day: 10 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'WEB', day: 22 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'JAN', day: 15 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
        { title: 'Conference Title', short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', datetime: { month: 'FEB', day: 30 } },
      ],
    }
  },
  methods: {
  },
}
</script>
