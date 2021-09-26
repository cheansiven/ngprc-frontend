<template>
  <b-row>
    <b-col sm="12">
      <b-card-code :title="$props.title">

        <!-- search input -->
        <div class="custom-search d-flex justify-content-end">
          <b-form-group>
            <div class="d-flex align-items-center">
              <label class="mr-1">Search</label>
              <b-form-input
                v-model="searchTerm"
                placeholder="Search"
                type="text"
                class="d-inline-block"
              />
            </div>
          </b-form-group>
        </div>
        <b-row>
          <b-col sm="3" />
          <b-col sm="9">
            <div v-for="row in this.rows" style="padding-left: 40px;padding-top: 10px; margin-bottom: 20px; box-shadow: 4px 4px 7px rgb(218, 214, 214);">
              <b-row style="padding-bottom: 10px">
                <div style="background-color:#deabab; position: absolute;left:10px; width: 40px;height: 40px; border-radius: 100%">
                  <h3 style="text-align: center; line-height: 40px">A</h3>
                </div>
                <b-col col="5">
                  <h4>{{ row.topic }}</h4>
                  <div>Latest reply by admin - 10/11/2021</div>
                </b-col>
                <b-col col="7">
                  <div>Topic by admin - 1 days ago at 21:00</div>
                  <div><b-icon icon="message" /> 3</div>
                </b-col>
              </b-row>
              <b-row>
                <b-col col="12">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel augue, mattis at consequat non...</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>

      </b-card-code>
    </b-col>
  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormGroup, BFormInput, BRow, BCol,BIcon
} from 'bootstrap-vue'
import store from '@/store/index'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BIcon
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
