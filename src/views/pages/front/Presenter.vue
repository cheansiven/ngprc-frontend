<template>
  <div>
    <front-top-menu :isStatic="true" />
    <div class="p-2">
      <h2 class="m-1">
        Presenter
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

import CardSpeakerProfile from '@/components/CardSpeakerProfile.vue'
export default {
  components: {
    FrontFooter,
    FrontTopMenu,
    BRow,
    BCol,
    CardSpeakerProfile,
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
        { avatar: require('@/assets/images/profile/user-uploads/user-03.jpg'), name: 'Ly Kumlong', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-03.jpg'), name: 'Ly Kumlong', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-01.jpg'), name: 'Cho Chanra', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-02.jpg'), name: 'Di Sona', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-03.jpg'), name: 'Ly Kumlong', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-04.jpg'), name: 'Ma Kimhuy', skill: 'Speaker' },
        { avatar: require('@/assets/images/profile/user-uploads/user-01.jpg'), name: 'Cho Chanra', skill: 'Speaker' },
      ],
    }
  },
  methods: {
  },
}
</script>
