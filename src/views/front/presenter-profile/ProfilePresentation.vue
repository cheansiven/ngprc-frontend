<template>
  <div>
    <b-row class="match-height">
      <b-col
          v-for="presentation in $props.presentations"
          lg="3"
          md="4"
          sm="2"
      >
        <card-presentation />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BAvatar, BCard, BCardText, BImg, BLink, BRow, BCol, BAvatarGroup, VBTooltip, BFormTextarea, BButton, BFormGroup, BEmbed,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'
import CardPresentation from '@/components/CardPresentation.vue'

export default {
  components: {
    CardPresentation,
    BAvatar,
    BCard,
    BCardText,
    BButton,
    BFormTextarea,
    BImg,
    BFormGroup,
    BRow,
    BLink,
    BCol,
    BAvatarGroup,
    BEmbed,
  },
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  props: {
    presentations: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    kFormatter,
  },
}
</script>
