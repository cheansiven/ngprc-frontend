<template>
  <div>
    <b-modal
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
              label="Time"
              label-for="vi-time"
            >
              <b-input-group class="input-group-merge">
                <b-button
                  id="vi-time"
                  :class="['button-as-text-box',presentationDateTimeClass]"
                  block
                  @click="dateTimeShowed = true"
                >
                  {{ presentationDateTime }}
                </b-button>
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
          <b-col cols="12">
            <b-form-group
              label="Abstract"
              label-for="vi-abstract"
            >
              <label-sub-title
                title="Please put your 300-500 words abstract which will be linked on your CICME profile page"
              />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="abstract"
                  v-model="abstract"
                  placeholder="Please put your abstract words"
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
                  v-model="active"
                >
                  <b-form-select-option
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
      </b-form>
      <date-time-picker-modal
        :visible="dateTimeShowed"
        @update:modal="getSelectedDateTime"
      />
    </b-modal>
  </div>
</template>

<script>

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
} from 'bootstrap-vue'
import LabelSubTitle from '@/components/LabelSubTitle.vue'
import DateTimePickerModal from '@/components/DateTimePickerModal.vue'
import useJwt from '@/auth/jwt/useJwt'

export default {
  components: {
    DateTimePickerModal,
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
    presentation: {
      type: Object,
    },
  },
  data() {
    return {
      status_options: [
        { key: 0, name: 'Inactive' },
        { key: 1, name: 'Pending' },
        { key: 2, name: 'Active' },
        { key: 3, name: 'Approved' },
      ],
      presentationId: false,
      dateTimeShowed: false,
      presentationDateTimeClass: '',
      // presentation
      presentationDateTime: 'Presentation time',
      presentationTitle: '',
      presentationFormat: {},
      presentationFormats: [],
      keywords: [],
      abstract: '',
      emailForProgram: '',
      // /
      required,
      email,
      url,
    }
  },
  watch: {
    presentation(nVal, oVal) {
      if (nVal !== oVal) {
        if (nVal.id) {
          this.presentationId = nVal.id
          this.presentationTitle = nVal.title
          this.presentationFormat = nVal.format
          this.emailForProgram = nVal.event_email
          this.keywords = nVal.keywords.split(',')
          this.abstract = nVal.abstract
          this.active = nVal.active ?? '1'
          this.presentationDateTime = nVal.event_date ?? 'Presentation time'

          if (this.presentationDateTime !== '' || this.presentationDateTime !== 'Presentation time') {
            this.presentationDateTimeClass = 'is-has-text'
          } else {
            this.presentationDateTimeClass = ''
          }
        } else {
          this.presentationId = false
          this.presentationTitle = ''
          this.presentationFormat = ''
          this.emailForProgram = ''
          this.keywords = []
          this.abstract = ''
          this.active = '0'

          this.presentationDateTime = 'Presentation time'
          this.presentationDateTimeClass = ''
        }
      }
    },
  },
  created() {
    this.getPresentationFormats()
    this.getAllCountries()
  },
  methods: {
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
    getSelectedDateTime(showed, value) {
      console.log('getSelectedDateTime ', `--${value}--`)
      this.dateTimeShowed = showed
      this.presentationDateTime = value ?? 'Presentation time'

      if (this.presentationDateTime !== '' || this.presentationDateTime !== 'Presentation time') {
        this.presentationDateTimeClass = 'is-has-text'
      } else {
        this.presentationDateTimeClass = ''
      }
      // if (this.presentationDateTime === '' || !this.presentationDateTime || this.presentationDateTime == null) {
      //   this.presentationDateTime = 'Presentation time'
      // }
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
        active: this.active,
      }
      this.$emit('update:modal', false, data)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
