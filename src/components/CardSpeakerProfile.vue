<template>
  <b-card
    :img-src="$props.speaker.avatar"
    img-alt="Card image cap"
    img-top
    :title="$props.speaker.name"
  >
    <h6 class="text-muted">
      {{$props.speaker.skill}}
    </h6>
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </b-card-text>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      View Profile
    </b-button>
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BButton, BRow, BCol, BImg, BCardBody, BCardTitle, BCardSubTitle, BLink,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    BRow,
    BCol,
    BLink,
    BImg,
  },
  directives: {
    Ripple,
  },
  props: {
    speaker: {
      default: {},
      required: true,
    },
  },
}
</script>
