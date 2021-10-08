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
                  {{presentationDateTime}}
                </b-button>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- email -->
          <b-col cols="12">
            <b-form-group
              label="Email"
              label-for="vi-email"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-email"
                  type="email"
                  placeholder="Email"
                  v-model="presentationEmail"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Presentation Section -->
          <b-col cols="12">
            <h4>Your presentation</h4>
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
                  type="text"
                  placeholder="Enter the title of your talk, workshop, or research topic."
                  v-model="presentationTitle"
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
                :options="presentation_format_options"
                name="radios-presentation-format"
                stacked
              />
            </b-form-group>
          </b-col>
          <!-- Abstract -->
          <b-col cols="12">
            <b-form-group
              label="Abstract"
              label-for="vi-abstract"
              v-model="abstract"
            >
              <label-sub-title
                title="Please put your 300-500 words abstract which will be linked on your CICME profile page"
              />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="abstract"
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

          <b-col cols="12">
            <h4>General information</h4>
          </b-col>
          <!-- Title and Name -->
          <b-col cols="12">
            <b-form-group
              label="Title and Name"
              label-for="vi-title-and-name"
            >
              <label-sub-title
                title="For use in official announcements, please provide your full title (e.g. Prof. Jean-François Maheux, Dr. Sun Somara)"
              />

              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-title-and-name"
                  type="text"
                  placeholder="Entry your name and title"
                  v-model="titleAndName"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Shorter version of title and name -->
          <b-col cols="12">
            <b-form-group
              label="Shorter version of title and name"
              label-for="vi-short-version-of-title-and-name"
            >
              <label-sub-title
                title="Please specify the email address you like us to print on the conference program and on the website. It can be the same email you provided above (which we will use to contact you in relation with your submission), or a different one (e.g. official institutional email)."
              />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-short-version-of-title-and-name"
                  type="text"
                  placeholder="Entry your name and title"
                  v-model="shortOfTitleAndName"
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
                  type="email"
                  placeholder="Entry Program's email"
                  v-model="emailForProgram"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Phone (optional) -->
          <b-col cols="12">
            <b-form-group
              label="Phone (optional)"
              label-for="vi-phone"
            >
              <label-sub-title title="Provide your phone number (+855 10 xxx xxx)" />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-phone"
                  type="text"
                  placeholder="Entry your phone number"
                  v-model="phoneNumber"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Organization * -->
          <b-col cols="12">
            <b-form-group
              label="Organization *"
              label-for="vi-organization"
            >
              <label-sub-title
                title="Please provide the full designation of your organization (university, NGO, company etc.), not only the acronym."
              />
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-organization"
                  type="text"
                  placeholder="Entry your organization"
                  v-model="organization"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- City/Country of your Organization * -->
          <b-col cols="12">
            <b-form-group
              label="City/Country of your Organization *"
              label-for="vi-city-of-organization"
            >
              <b-input-group class="input-group-merge">
                <b-form-select
                  v-model="countryOrState"
                >
                  <b-form-select-option-group
                    v-for="country in countries"
                    :label="country.name"
                    :key="country.name + country.iso3"
                  >

                    <b-form-select-option
                      v-if="!country.states.length"
                      :key="country.name + country.iso3"
                      :value="country"
                    >
                      {{ country.name }}
                    </b-form-select-option>

                    <b-form-select-option
                      v-for="state in country.states"
                      :key="state.name + state.iso3"
                      :value="state"
                    >
                      {{ state.name }}
                    </b-form-select-option>

                  </b-form-select-option-group>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- Your Position -->
          <b-col cols="12">
            <b-form-group
              label="Your Position"
              label-for="vi-job-position"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-job-position"
                  type="text"
                  placeholder="Entry your position"
                  v-model="jobPosition"
                />
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
        v-on:update:modal="getSelectedDateTime"
      />
    </b-modal>
  </div>
</template>

<script>
import axios from '@axios'
import Ripple from 'vue-ripple-directive'
import { required, email, url } from '@validations'
import {
  BModal,
  BButton,
  BRow,
  BCol,
  BFormGroup,
  BFormRadioGroup,
  BFormInput,
  BForm,
  BInputGroup,
  BFormTags,
  BFormSelect,
  BFormSelectOption,
  BFormSelectOptionGroup,
} from 'bootstrap-vue'
import LabelSubTitle from '@/components/LabelSubTitle.vue'
import DateTimePickerModal from '@/components/DateTimePickerModal'
import presentation_formats from '@/@fake-db/data/json/presentation_formats'
import countries from '@/@fake-db/data/json/countries'

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
    BButton,
    BFormTags,
    BFormSelect,
    BFormSelectOptionGroup,
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
  },
  data() {
    return {
      presentationDateTime: 'Presentation time',
      presentationEmail: '',
      presentationTitle: '',
      presentationFormat: -1,
      abstract: '',
      keywords: [],
      titleAndName: '',
      shortOfTitleAndName: '',
      emailForProgram: '',
      phoneNumber: '',
      organization: '',
      countryOrState: {},
      jobPosition: '',
      // /
      presentationDateTimeClass: '',
      dateTimeShowed: false,
      countries: [],
      presentation_format_options: [],
      required,
      email,
      url,
    }
  },
  mounted() {
    this.getPresentationOptions()
    this.getAllCountries()
  },
  methods: {
    getPresentationOptions() {
      this.presentation_format_options = [
        {
          text: 'Plenary presentation (35 min, plus 10 min for Q&A)',
          value: '1',
        },
        {
          text: 'Panel Discussion (45 min, plus 10 min Q&A)',
          value: '2',
        },
        {
          text: 'Discussion group (20-45 min, depending on the number of participants)',
          value: '3',
        },
        {
          text: 'Workshop (with audience participation, e.g. through shared documents or breakout rooms, 45 min).',
          value: '4',
        },
        {
          text: 'Paper presentation (20 min, plus 10 min Q&A).',
          value: '5',
        },
      ]
    },
    async getAllCountries() {
      const promise = await axios
        .get('/countries', {
          params: {},
        })

      if (promise.status === 200) {
        this.countries = promise.data
      }

      console.log('getAllCountries', this.countries)
    },
    getSelectedDateTime(showed, value) {
      this.dateTimeShowed = showed
      this.presentationDateTime = value

      if (this.presentationDateTime !== '' || this.presentationDateTime !== 'Presentation time'){
        this.presentationDateTimeClass = 'is-has-text'
      } else {
        this.presentationDateTimeClass = ''
      }
    },
  },
  onSubmit() {
    const data = {
      presentation_date: this.presentationDateTime,
      presentation_title: this.presentationTitle,
      presentation_format: this.presentationFormat,
      title_and_name: this.titleAndName,
      short_title_and_name: this.shortOfTitleAndName,
      presenter_email: this.email,
      presentation_email: this.presentationEmail,
      presentation_phone: this.phoneNumber,
      organization: this.organization,
      country: this.countryOrState,
      presenter_position: this.jobPosition,
      abstract: this.abstract,
      keywords: this.keywords,
    }
    this.$emit('update:modal', false, data)
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
