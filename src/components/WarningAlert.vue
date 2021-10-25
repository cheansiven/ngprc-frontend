<template>
  <b-alert
    class="my-warning"
    variant="danger"
    :show="$props.show"
  >
    <div
      class="alert-body"
      v-html="$props.message"
    />
  </b-alert>
</template>

<script>
import { BAlert } from 'bootstrap-vue'

export default {
  components: {
    BAlert,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: 'Something went wrong',
    },
  },
}
</script>

<style scoped>

</style>
