<template>
  <b-row>
    <b-col cols="12">
      <conference-table-basic :title="$props.title" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ConferenceTableBasic from './ConferenceTableBasic.vue'

export default {
  components: {
    BRow,
    BCol,
    ConferenceTableBasic,
  },
  props: {
    title: {
      default: 'Table Title',
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
