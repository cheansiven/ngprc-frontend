<template>
  <b-row>
    <b-col sm="12">
      <b-card-code :title="$props.title">
        <b-row>
          <b-col sm="3">
            <card-forum-type />
          </b-col>
          <b-col sm="9">
            <card-forum-list />
          </b-col>
        </b-row>
      </b-card-code>
    </b-col>
  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BRow, BCol,
} from 'bootstrap-vue'
import CardForumType from '@/components/forum/CardForumType.vue'
import CardForumList from '@/components/forum/CardForumList.vue'
import store from '@/store/index'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    CardForumType,
    CardForumList,
  },
  props: {
    title: {
      default: 'Table Title',
    },
    data_type: {
      default: '',
    },
  },
  data() {
    return {
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: 'Topic',
          field: 'topic',
        },
        {
          label: 'Description',
          field: 'description',
        },
        {
          label: 'Post Date',
          field: 'post_date',
        },
        {
          label: 'Action',
          field: 'action',
        },
      ],
      rows: [],
      searchTerm: '',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.$http.get(`/forum/${this.$props.data_type}`)
      .then(res => { this.rows = res.data; console.log('res.data ', res.data) })
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
