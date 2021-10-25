<template>
  <div>
    <b-modal
      id="presentation-add-modal"
      ref="my-modal"
      hide-footer
      title="Add new Presentation"
      :visible="$props.visible"
      no-close-on-backdrop
      size="l"
      @close="$emit('update:modal',false)"
    >
      <b-form @submit.prevent>
        <b-row>
          <!-- date time -->
          <b-col cols="12">
            <b-form-group
              label="Preferred Time"
              label-for="vi-event-time"
            >
              <b-input-group class="input-group-merge">
                <flat-pickr
                  id="vi-event-time"
                  v-model="presentationDateTime"
                  class="form-control"
                  :config="{ enableTime: true,dateFormat: 'd/m/Y H:i K'}"
                />
<!--                <b-form-input-->
<!--                    id="vi-event-time"-->
<!--                    v-model="presentationDateTime"-->
<!--                    placeholder="Enter your Date time"-->
<!--                />-->
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Title -->
          <b-col cols="12">
            <b-form-group
              label="Presentation Title"
              label-for="vi-presentation"
            >
              <label-sub-title title="Enter the title of your talk, workshop, or research topic." />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-presentation"
                  v-model="presentationTitle"
                  type="text"
                  placeholder="Enter the title of your talk, workshop, or research topic."
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Email for the program -->
          <b-col cols="12">
            <b-form-group
              label="Email for the program"
              label-for="vi-email-for-program"
            >
              <label-sub-title
                title="Please specify the email address you like us to print on the conference program and on the website. It can be the same email you provided above (which we will use to contact you in relation with your submission), or a different one (e.g. official institutional email)."
              />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-email-for-program"
                  v-model="emailForProgram"
                  type="email"
                  placeholder="Entry Program's email"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Presentation Format -->
          <b-col cols="12">
            <b-form-group
              label="Presentation Format"
              label-for="vi-presentation-format"
            >
              <b-form-radio-group
                id="vi-presentation-format"
                v-model="presentationFormat"
                name="radios-presentation-format"
                stacked
              >
                <b-form-radio
                  v-for="option in presentationFormats"
                  :key="option.id"
                  :value="option.id"
                >
                  {{ option.name }}
                </b-form-radio>

              </b-form-radio-group>
            </b-form-group>
          </b-col>
          <!-- Abstract -->
          <b-col
            cols="12"
            style="height: 300px;"
          >
            <b-form-group
              label="Abstract"
              label-for="vi-abstract"
            >
              <label-sub-title
                title="Please put your 300-500 words abstract which will be linked on your CICME profile page"
              />
              <b-input-group class="input-group-merge">
                <quill-editor
                  id="vi-abstract"
                  v-model="abstract"
                  :options="editorOption"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Keywords -->
          <b-col cols="12">
            <b-form-group
              label="Keywords"
              label-for="vi-keywords"
            >
              <label-sub-title
                title="Please provide a few keywords (e.g. school-based mentoring, teacher professional development, …)"
              />
              <b-input-group class="input-group-merge">
                <b-form-tags
                  v-model="keywords"
                  input-id="vi-keywords"
                  placeholder="Add your keywords"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Status -->
          <b-col cols="12">
            <b-form-group
              label="Status"
              label-for="vi-status"
            >
              <label-sub-title
                title="Please provide a few keywords (e.g. school-based mentoring, teacher professional development, …)"
              />
              <b-input-group class="input-group-merge">
                <b-form-select
                  v-model="status"
                >
                  <b-form-select-option
                      v-bind:key="option.key"
                    v-for="option in status_options"
                    :value="option.key"
                  >
                    {{ option.name }}
                  </b-form-select-option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- reset and submit -->
          <b-col cols="12">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-1"
              @click="onSubmit"
            >
              Submit
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-secondary"
            >
              Reset
            </b-button>
          </b-col>
        </b-row>
        <div
          v-if="this.showLoading"
          class="spinner-in-modal"
        >
          <b-spinner />
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment'
import Ripple from 'vue-ripple-directive'
import { required, email, url } from '@validations'
import {
  BModal,
  BButton,
  BRow,
  BCol,
  BFormGroup,
  BFormRadioGroup,
  BFormRadio,
  BFormInput,
  BForm,
  BInputGroup,
  BFormTags,
  BFormSelect,
  BFormSelectOption,
  BSpinner,
} from 'bootstrap-vue'
import { quillEditor } from 'vue-quill-editor'
import flatPickr from 'vue-flatpickr-component'
import LabelSubTitle from '@/components/LabelSubTitle.vue'
import useJwt from '@/auth/jwt/useJwt'


export default {
  components: {
    BSpinner,
    flatPickr,
    quillEditor,
    LabelSubTitle,
    BModal,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BFormRadioGroup,
    BFormRadio,
    BButton,
    BFormTags,
    BFormSelect,
    BFormSelectOption,
  },
  directives: {
    Ripple,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    presentation_id: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showLoading: false,
      spinner: false,
      status_options: [
        { key: 0, name: 'Inactive' },
        { key: 1, name: 'Pending' },
        { key: 2, name: 'Active' },
        { key: 3, name: 'Approved' },
      ],
      presentationId: false,
      // presentation
      presentationDateTime: 'Presentation time',
      presentationTitle: '',
      presentationFormat: {},
      presentationFormats: [],
      keywords: [],
      abstract: '',
      emailForProgram: '',
      status: '',
      // /
      required,
      email,
      url,
    }
  },
  watch: {
    presentation_id(nVal, oVal) {
      if (nVal !== oVal) {
        console.log('nVal ', nVal)
        this.getPresentation(nVal)
      }
    },
  },
  created() {
    this.getPresentationFormats()
    this.getAllCountries()
    this.presentationDateTime = moment().format('DD/MM/YYYY HH:mm A')
  },
  methods: {
    resetForm() {
      this.presentationId = false
      this.presentationTitle = ''
      this.presentationFormat = ''
      this.emailForProgram = ''
      this.keywords = []
      this.abstract = ''
      this.status = '0'
      this.presentationDateTime = ''
    },
    async getPresentationFormats() {
      const cjson = localStorage.getItem('presentationFormats')
      if (!cjson || cjson === null || cjson === '') {
        const promise = await this.$http.get('presentation-formats')
        if (promise.status === 200) {
          if (!promise.data.error) {
            this.presentationFormats = promise.data
            localStorage.setItem('presentationFormats', JSON.stringify(this.presentationFormats))
          }
        }
      } else {
        this.presentationFormats = JSON.parse(cjson)
      }
    },
    async getAllCountries() {
      const cjson = localStorage.getItem('countries')
      if (!cjson || cjson === null || cjson === '') {
        const promise = await this.$http.get('/countries', null)

        if (promise.status === 200) {
          this.countries = promise.data
          localStorage.setItem('countries', JSON.stringify(this.countries))
        }
      } else {
        this.countries = JSON.parse(cjson)
      }
    },
    getPresentation(id) {
      if(id <= 0) return
      this.resetForm()
      this.showLoading = true
      useJwt.axiosIns.get(`/presentation/${id}`)
        .then(res => {
          if (res.status === 200) {
            if (!res.data.error) {
              if (res.data) {
                this.presentationId = res.data.id
                this.presentationTitle = res.data.title
                this.presentationFormat = res.data.format
                this.emailForProgram = res.data.event_email
                this.keywords = res.data.keywords.split(',')
                this.abstract = res.data.abstract
                this.status = res.data.status ?? '1'
                this.presentationDateTime = res.data.event_date ?? ''
              }
            }
          }
          this.showLoading = false
        }).catch(() => {
          this.showLoading = false
        })
    },
    async onSubmit() {
      const data = {
        id: this.presentationId,
        event_date: this.presentationDateTime,
        title: this.presentationTitle,
        event_email: this.emailForProgram,
        keywords: this.keywords,
        abstract: this.abstract,
        format: this.presentationFormat,
        status: this.status,
      }

      this.showLoading = true
      useJwt.axiosIns.post('presentation', data)
        .then(response => {
          if (response.status === 200) {
            this.resetForm()
            this.$emit('update:modal', false, response.data || {})
          }
          this.showLoading = false
        })
        .catch(() => {
          this.showLoading = false
        })
    },
  },
  // eslint-disable-next-line no-unused-vars
  setup(_, { emit }) {
    const editorOption = {
      modules: {
        toolbar: [
          // ['bold', 'italic', 'underline', 'strike'],
          ['bold', 'italic', 'underline'],
          // ['blockquote', 'code-block'],
          [{ header: 1 }, { header: 2 }],
          // [{ list: 'ordered' }, { list: 'bullet' }],
          // [{ script: 'sub' }, { script: 'super' }],
          // [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ size: ['small', !1, 'large', 'huge'] }],
          // [{ header: [1, 2, 3, 4, 5, 6, !1] }],
          // [{ color: [] }, { background: [] }],
          [{ color: [] }],
          [{ font: [] }],
          [{ align: [] }],
          // ['clean'],
          // ['link', 'image', 'video'],
        ],
      },
      placeholder: 'Please put your 300-500 words abstract which will be linked on your CICME profile page',
    }

    return {
      editorOption,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
