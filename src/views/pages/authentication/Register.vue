<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link
        class="brand-logo"
        to="/"
      >
        <site-logo />

        <h2 class="brand-text text-primary ml-1">
          CICME
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Register V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Register-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title class="mb-1">
            Welcome to CICME! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Please register an account and start the adventure
          </b-card-text>

          <!-- form -->
          <validation-observer
            ref="registerForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-register-form mt-2"
              @submit.prevent="register"
            >
              <!-- username -->
              <b-form-group
                label="Username"
                label-for="register-username"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Username"
                  vid="username"
                  rules="required"
                >
                  <b-form-input
                    id="register-username"
                    v-model="username"
                    name="register-username"
                    :state="errors.length > 0 ? false:null"
                    placeholder="johndoe"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- email -->
              <b-form-group
                label="Email"
                label-for="register-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="register-email"
                    v-model="userEmail"
                    name="register-email"
                    :state="errors.length > 0 ? false:null"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group
                label-for="register-password"
                label="Password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="register-password"
                      v-model="password"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      :state="errors.length > 0 ? false:null"
                      name="register-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        :icon="passwordToggleIcon"
                        class="cursor-pointer"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <b-row v-if="isPresenter">
                <!-- Presentation Section -->
                <b-col cols="12">
                  <h4>Your presentation</h4>
                </b-col>
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
                        placeholder="Please put your abstract words"
                        v-model="abstract"
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
                        v-model="titleAndName"
                        type="text"
                        placeholder="Entry your name and title"
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
                      title="The shorter version that we will use during discussion (e.g. Prof. Maheux)."
                    />
                    <b-input-group class="input-group-merge">
                      <b-form-input
                        id="vi-short-version-of-title-and-name"
                        v-model="shortOfTitleAndName"
                        type="text"
                        placeholder="Entry your name and title"
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
                        v-model="phoneNumber"
                        type="text"
                        placeholder="Entry your phone number"
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
                        v-model="organization"
                        type="text"
                        placeholder="Entry your organization"
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
                          :key="country.name + country.iso3"
                          :label="country.name"
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
                        v-model="jobPosition"
                        type="text"
                        placeholder="Entry your position"
                      />
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <!-- Timezone -->
                <b-col cols="12">
                  <b-form-group
                    label="Timezone"
                    label-for="vi-timezone"
                  >
                    <label-sub-title
                      title="Please provide your time zone. You can check via this link https://www.worldtimeserver.com/"
                    />
                    <b-input-group class="input-group-merge">
                      <b-form-input
                        id="vi-timezone"
                        v-model="timezone"
                        type="text"
                        placeholder="Entry your position"
                      />
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>

              <!-- I want to propose a presentation. -->
              <b-form-group>
                <b-form-checkbox
                  id="register-for-presentation"
                  v-model="isPresenter"
                  name="presentation-checkbox"
                >
                  I want to propose a presentation.
                </b-form-checkbox>
              </b-form-group>

              <!-- I want to receive the newsletter. -->
              <b-form-group>
                <b-form-checkbox
                  id="register-for-newsletter"
                  v-model="isNewsletter"
                  name="newsletter-checkbox"
                >
                  I want to receive the newsletter.
                </b-form-checkbox>
              </b-form-group>

              <!-- I want to register to the forum. -->
              <b-form-group>
                <b-form-checkbox
                  id="register-for-forum"
                  v-model="isForum"
                  name="forum-checkbox"
                  checked="checked"
                  disabled="disabled"
                >
                  I want to register to the forum.
                </b-form-checkbox>
              </b-form-group>

              <b-form-group>
                <b-form-checkbox
                  id="register-privacy-policy"
                  v-model="status"
                  name="status-checkbox"
                  checked="checked"
                  disabled="disabled"
                >
                  I agree to
                  <b-link>privacy policy & terms</b-link>
                </b-form-checkbox>
              </b-form-group>

              <b-button
                variant="primary"
                block
                type="submit"
                :disabled="invalid"
              >
                Sign up
              </b-button>
            </b-form>
          </validation-observer>

          <p class="text-center mt-2">
            <span>Already have an account?</span>
            <b-link :to="{name:'auth-login'}">
              <span>&nbsp;Sign in instead</span>
            </b-link>
          </p>

          <!-- divider -->
          <div class="divider my-2">
            <div class="divider-text">
              or
            </div>
          </div>

          <div class="auth-footer-btn d-flex justify-content-center">
            <b-button
              variant="facebook"
              href="javascript:void(0)"
            >
              <feather-icon icon="FacebookIcon" />
            </b-button>
            <b-button
              variant="twitter"
              href="javascript:void(0)"
            >
              <feather-icon icon="TwitterIcon" />
            </b-button>
            <b-button
              variant="google"
              href="javascript:void(0)"
            >
              <feather-icon icon="MailIcon" />
            </b-button>
            <b-button
              variant="github"
              href="javascript:void(0)"
            >
              <feather-icon icon="GithubIcon" />
            </b-button>
          </div>
        </b-col>
      </b-col>
      <!-- /Register-->
    </b-row>
    <date-time-picker-modal
      :visible="dateTimeShowed"
      @update:modal="getSelectedDateTime"
    />
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import SiteLogo from '@core/layouts/components/Logo.vue'
import {
  BRow,
  BCol,
  BLink,
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupAppend,
  BImg,
  BCardTitle,
  BCardText,
  BFormTags,
  BFormSelect,
  BFormSelectOption,
  BFormSelectOptionGroup,
  BFormRadioGroup,
  BFormRadio,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import LabelSubTitle from '@/components/LabelSubTitle.vue'
import DateTimePickerModal from '@/components/DateTimePickerModal.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent'

export default {
  components: {
    DateTimePickerModal,
    LabelSubTitle,
    SiteLogo,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormTags,
    BFormSelect,
    BFormSelectOption,
    BFormSelectOptionGroup,
    BFormRadioGroup,
    BFormRadio,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
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
      // User
      titleAndName: '',
      shortOfTitleAndName: '',
      jobPosition: '',
      countryOrState: '',
      organization: '',
      phoneNumber: '',
      timezone: '',
      //
      status: true,
      isForum: true,
      isPresenter: false,
      isNewsletter: false,
      username: '',
      userEmail: '',
      password: '',
      sideImg: require('@/assets/images/pages/register-v2.svg'),
      timezones: [],
      //
      countries: [],
      // validation
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  created() {
    this.getPresentationFormats()
    this.getAllCountries()
  },
  methods: {
    register() {
      const params = {
        username: this.username,
        email: this.userEmail,
        password: this.password,
        isForum: this.isForum,
        isPresenter: this.isPresenter,
        isNewsletter: this.isNewsletter,
      }

      if (this.isPresenter) {
        Object.assign(params, {

          name: this.titleAndName,
          short_name: this.shortOfTitleAndName,
          phone: this.phoneNumber,
          city_or_country: this.countryOrState,
          job_position: this.jobPosition,
          timezone: this.timezone,

          event_date: this.presentationDateTime,
          title: this.presentationTitle,
          event_email: this.emailForProgram,
          keywords: this.keywords,
          abstract: this.abstract,
          format: this.presentationFormat,
        })
      }
      //console.log(params);return;
      this.$refs.registerForm.validate()
        .then(success => {
          if (success) {
            useJwt.register(params)
              .then(response => {
                if (response.data.error === '1') {
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: 'Warning',
                      icon: 'WarningIcon',
                      variant: 'warning',
                      text: response.data.message,
                    },
                  })
                  return
                }
                useJwt.setToken(response.data.accessToken)
                useJwt.setRefreshToken(response.data.refreshToken)
                localStorage.setItem('userData', JSON.stringify(response.data.userData))
                this.$ability.update(response.data.userData.ability)
                this.$router.push('/')
              })
              .catch(error => {
                this.$refs.registerForm.setErrors(error.response.data.error)
              })
          }
        })
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
          if (!promise.data.error) {
            this.countries = promise.data
            localStorage.setItem('countries', JSON.stringify(this.countries))
          }
        }
      } else {
        this.countries = JSON.parse(cjson)
      }
    },
    getSelectedDateTime(showed, value) {
      this.dateTimeShowed = showed
      this.presentationDateTime = value

      if (this.presentationDateTime !== '' || this.presentationDateTime !== 'Presentation time') {
        this.presentationDateTimeClass = 'is-has-text'
      } else {
        this.presentationDateTimeClass = ''
      }
    },
    async getTimezones() {
      const cjson = localStorage.getItem('timezones')
      if (!cjson || cjson === null || cjson === '') {
        const promise = await this.$http.get('/timezones', null)

        if (promise.status === 200) {
          if (!promise.data.error) {
            this.timezones = promise.data
            localStorage.setItem('timezones', JSON.stringify(this.timezones))
          }
        }
      } else {
        this.timezones = JSON.parse(cjson)
      }
    },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
