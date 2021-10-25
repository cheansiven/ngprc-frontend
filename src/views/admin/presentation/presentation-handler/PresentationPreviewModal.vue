<template>
  <b-modal
    id="view-presentation-modal"
    :visible="$props.visible"
    size="s"
    no-close-on-backdrop
    title="Presentation viewer"
    @close="$emit('modal:update',false, null)"
    hide-footer
  >
    <warning-alert
      :show="showWarning"
      :message="warningMessage"
    />
    <b-row style="max-height: 400px ;overflow-y: scroll">
      <b-col
        cols="12"
        class="form-group"
      >
        <strong>Presenter Information</strong>
      </b-col>
      <!-- Name -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="Name"
          label-for="vi-name"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-name"
              :value="presentation.author.name"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Shot Name -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="Short Name"
          label-for="vi-short-name"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-short-name"
              :value="presentation.author.short_name"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Phone -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="Phone"
          label-for="vi-phone"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-phone"
              :value="presentation.author.phone"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Position -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="Position"
          label-for="vi-position"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-position"
              :value="presentation.author.job_position"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Organization -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="Organization"
          label-for="vi-organization"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-organization"
              :value="(presentation.author.organization ? presentation.author.organization.name : '')"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- City -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="City or Country"
          label-for="vi-city-or-country"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-city-or-country"
              :value="presentation.author.city_or_country"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Timezone -->
      <b-col
        v-if="presentation.author"
        cols="12"
      >
        <b-form-group
          label="Timezone"
          label-for="vi-timezone"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-timezone"
              :value="presentation.author.timezone"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col
        cols="12"
        class="form-group"
      >
        <strong>Presentation Information</strong>
      </b-col>
      <!-- date time -->
      <b-col cols="12" v-if="presentation.approved_event_date">
        <b-form-group
          label="Time (Admin Approved)"
          label-for="vi-event-date"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-event-data"
              :value="presentation.approved_event_date"
              type="text"
              disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="12" v-else>
        <b-form-group
            label="Preferred Time"
            label-for="vi-event-date"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
                id="vi-event-data"
                :value="presentation.event_date"
                type="text"
                disabled=""
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Title -->
      <b-col cols="12">
        <b-form-group
          label="Presentation Title"
          label-for="vi-presentation"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-presentation"
              :value="presentation.title"
              type="text"
              disabled=""
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
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-email-for-program"
              :value="presentation.event_email"
              type="email"
              disabled
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
            v-model="presentation.format"
            name="radios-presentation-format"
            stacked
          >
            <b-form-radio
              v-for="option in presentationFormats"
              :key="option.id"
              :value="option.id"
              disabled
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
          <b-input-group class="input-group-merge">
            <div v-html="presentation.abstract" />
          </b-input-group>
        </b-form-group>
      </b-col>
      <!-- Keywords -->
      <b-col cols="12">
        <b-form-group
          label="Keywords"
          label-for="vi-keywords"
        >
          <b-input-group class="input-group-merge">
            <b-form-input
              id="abstract"
              :value="presentation.keywords"
              disabled
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
          <b-input-group class="input-group-merge">
            <b-form-input
              id="vi-status"
              :value="statusString(presentation.status)"
              disabled
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <div
        v-if="showLoading"
        class="spinner-in-modal"
      >
        <b-spinner />
      </div>
      <b-col cols="12">
        <b-button
            v-if="$props.closeOnly"
            right
            @click="onSubmit('close')"
        >
          Close
        </b-button>
        <b-button
            v-else-if="presentation.status === 1"
            right
            @click="showDateTimePicker = true"
        >
          Approve
        </b-button>
        <b-button
            v-else
            right
            @click="onSubmit('close')"
        >
          Close
        </b-button>
      </b-col>
      <date-time-picker-modal
        :visible="showDateTimePicker"
        @modal:update="getApprovedDateTime"
      />
    </b-row>
  </b-modal>
</template>

<script>

import Ripple from 'vue-ripple-directive'
import {
  BModal,
  BButton,
  BRow,
  BCol,
  BFormGroup,
  BFormRadioGroup,
  BFormRadio,
  BFormInput,
  BInputGroup,
  BSpinner,
} from 'bootstrap-vue'
import useJwt from '@/auth/jwt/useJwt'
import DateTimePickerModal from '@/components/DateTimePickerModal.vue'
import WarningAlert from '@/components/WarningAlert.vue'

export default {
  components: {
    WarningAlert,
    DateTimePickerModal,
    BSpinner,
    BModal,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BFormRadioGroup,
    BFormRadio,
    BButton,
  },
  directives: {
    Ripple,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    closeOnly: {
      type: Boolean,
      default: false,
    },
    presentation_id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      warningMessage: 'Something went wrong',
      showWarning: false,
      approvedDateTime: '',
      showDateTimePicker: false,
      showLoading: false,
      status_options: [
        { key: 0, name: 'Inactive' },
        { key: 1, name: 'Pending' },
        { key: 2, name: 'Active' },
        { key: 3, name: 'Approved' },
      ],
      presentation: false,
    }
  },
  watch: {
    presentation_id(nVal, oVal) {
      if (nVal !== oVal) {
        if (nVal > 0) {
          this.viewPresentation(nVal)
        }
      }
    },
  },
  created() {
    this.getPresentationFormats()
    this.getAllCountries()
  },
  methods: {
    fnShowWarning(message = 'Something went wrong') {
      this.warningMessage = message
      this.showWarning = true
      setTimeout(() => {
        this.showWarning = false
      }, 1500)
    },
    viewPresentation(id) {
      this.showLoading = true
      useJwt.axiosIns.get(`/presentation/${id}`)
        .then(res => {
          if (res.status === 200) {
            if (!res.data.error) {
              this.presentation = res.data
              this.showPresentationModal = true
            }
          }
          this.showLoading = false
        }).catch(() => {
          this.showLoading = false
        })
    },
    statusString(active) {
      switch (active) {
        case 0:
          return 'Inactive'
        case 1:
          return 'Pending'
        case 2:
          return 'Approved'
        default:
          return ''
      }
    },
    getApprovedDateTime(state, value) {
      this.showDateTimePicker = state
      this.approvedDateTime = value

      if (!this.approvedDateTime || this.approvedDateTime === '' || this.approvedDateTime === null) {
        this.fnShowWarning('Approve date is required')
        return
      }
      this.onSubmit('submit')
    },
    onSubmit(action) {
      if (!this.$props.presentation_id || this.$props.presentation_id <= 0) {
        this.$emit('modal:update', false, null)
        return
      }

      if (action === 'close') {
        this.$emit('modal:update', false, null)
      } else {
        this.showLoading = true
        const data = {
          approved_date: this.approvedDateTime,
        }
        useJwt.axiosIns.post(`presentation/${this.$props.presentation_id}/approve`,data)
          .then(res => {
            if (res.status === 200 && !res.data.error) {
              this.$emit('modal:update', false, res.data)
            } else {
              this.fnShowWarning()
              // this.$emit('modal:update', false, null)
            }
            this.showLoading = false
          }).catch(error => {
            console.log('ERROR ')
            console.log(error)
            this.showLoading = false
          })
      }
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
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
