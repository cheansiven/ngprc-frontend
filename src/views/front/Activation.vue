<template>
  <div>
    <front-top-menu :is-static="true" />
    <div style="max-width: 800px;margin: auto;padding: 18px;">
      <b-row>
        <!-- Register-->
        <b-col
          lg="12"
          class="d-flex align-items-center auth-bg px-2 p-lg-5 activation-box"
        >
          <b-col
            sm="8"
            md="6"
            lg="12"
            class="px-xl-2 mx-auto"
          >
            <b-card-title class="mb-1">
              Complete your profile
            </b-card-title>
            <b-card-text class="mb-2">
              This will used to promote your presentation and your organization
            </b-card-text>

            <!-- form -->
            <validation-observer
              ref="activationForm"
              #default="{invalid}"
            >
              <b-form
                class="user-activate mt-2"
                @submit.prevent="activate"
              >
                <b-row>
                  <!-- Title and Name -->
                  <b-col cols="12">
                    <b-form-group
                      label="Title and Name *"
                      label-for="vi-title-and-name"
                    >
                      <label-sub-title
                        title="For use in official announcements, please provide your full title (e.g. Prof. Jean-François Maheux, Dr. Sun Somara)"
                      />
                      <validation-provider
                        #default="{ errors }"
                        name="Title and Name"
                        vid="title-and-name"
                        rules="required"
                      >
                        <label-sub-title title="Please, provide your full title (e.g. Pr. Jean-François Maheux PhD) and the shorter version we can use during discussion (e.g. Pr. Maheux)" />
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-input
                            id="vi-title-and-name"
                            v-model="titleAndName"
                            type="text"
                            placeholder="Entry your name and title"
                          />
                        </b-input-group>
                      </validation-provider>
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
                      <validation-provider
                        #default="{ errors }"
                        name="Organization"
                        vid="organization"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-input
                            id="vi-organization"
                            v-model="organization"
                            type="text"
                            placeholder="Entry your organization"
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                  <!-- Organization Logo -->
                  <b-col cols="12">
                    <b-form-group
                      label="Organization Logo *"
                      label-for="vi-organization-logo"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Organization Logo"
                        vid="organization-logo"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-file
                            id="v-organization-logo"
                            v-model="organizationLogo"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                  <!-- Organization * -->
                  <b-col cols="12">
                    <b-form-group
                      label="Organization Website *"
                      label-for="vi-organization-website"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Organization Website"
                        vid="organization-website"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-input
                            id="vi-organization-website"
                            v-model="organizationWebsite"
                            type="text"
                            placeholder="Entry your organization website"
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                  <!-- Please, remind us the title of your speech -->
                  <b-col cols="12">
                    <b-form-group
                      label="Please, remind us the title of your speech*"
                      label-for="vi-presentation"
                    >
                      <label-sub-title title="Enter the title of your talk, workshop, or research topic." />

                      <validation-provider
                        #default="{ errors }"
                        name="Presentation Title"
                        vid="presentation"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-input
                            id="vi-presentation"
                            v-model="presentationTitle"
                            type="text"
                            placeholder="Enter the title of your talk, workshop, or research topic."
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                  <!-- User Bio -->
                  <b-col
                    cols="12"
                    style="height:350px"
                  >
                    <b-form-group
                      label="Biosketch"
                      label-for="vi-user-bio"
                    >
                      <label-sub-title
                        title="Please put your 300-500 words abstract which will be linked on your CICME profile page"
                      />
                      <validation-provider
                        #default="{ errors }"
                        name="Biosketch"
                        vid="user-bio"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="[errors.length > 0 ? 'is-invalid':null,'user-bio']"
                        >
                          <quill-editor
                            id="vi-user-bio"
                            v-model="userBio"
                            :options="editorOption"
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                  <!-- User Avatar -->
                  <b-col cols="12">
                    <b-form-group
                      label="A photo of yourself *"
                      label-for="vi-user-avatar"
                    >
                      <validation-provider
                        #default="{ errors }"
                        name="Avatar"
                        vid="user-avatar"
                        rules="required"
                      >
                        <b-input-group
                          class="input-group-merge"
                          :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-file
                            id="v-user-avatar"
                            v-model="avatar"
                            placeholder="Choose a file or drop it here..."
                            drop-placeholder="Drop file here..."
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

<!--                  &lt;!&ndash; slideshows &ndash;&gt;-->
<!--                  <b-col cols="12">-->
<!--                    <b-form-group-->
<!--                        label="Please, upload your slideshow to facilitate the conference."-->
<!--                        label-for="vi-slideshow"-->
<!--                        style="line-height: 22px"-->
<!--                    >-->
<!--                      <div class="float-top-right-button" @click="slideshows.push([])">+</div>-->
<!--                      <validation-provider-->
<!--                          v-for="(slideshow, key) in slideshows"-->
<!--                          #default="{ errors }"-->
<!--                          name="Slideshow"-->
<!--                          :vid="'slideshow-'+key"-->
<!--                          rules="required"-->
<!--                      >-->
<!--                        <b-input-group-->
<!--                            class="input-group-merge"-->
<!--                            style="padding-bottom: 10px"-->
<!--                            :class="errors.length > 0 ? 'is-invalid':null"-->
<!--                        >-->
<!--                          <b-form-file-->
<!--                              :id="'v-slideshow-'+key"-->
<!--                              v-model="slideshow[key]"-->
<!--                              placeholder="Choose a file or drop it here..."-->
<!--                              drop-placeholder="Drop file here..."-->
<!--                          />-->
<!--                        </b-input-group>-->
<!--                      </validation-provider>-->
<!--                    </b-form-group>-->
<!--                  </b-col>-->

                  <!-- Slideshow -->
                  <b-col cols="12">
                    <b-form-group
                        label="Please, upload your slideshow to facilitate the conference."
                        label-for="vi-presentation-slideshow"
                    >
                      <validation-provider
                          #default="{ errors }"
                          name="Slideshow"
                          vid="presentation-slideshow"
                          rules="required"
                      >
                        <b-input-group
                            class="input-group-merge"
                            :class="errors.length > 0 ? 'is-invalid':null"
                        >
                          <b-form-file
                              id="v-presentation-slideshow"
                              v-model="slideshow"
                              placeholder="Choose a file or drop it here..."
                              drop-placeholder="Drop file here..."
                          />
                        </b-input-group>
                      </validation-provider>
                    </b-form-group>
                  </b-col>

                </b-row>

                <b-button
                  variant="primary"
                  block
                  type="submit"
                  :disabled="invalid"
                >
                  Submit
                </b-button>
              </b-form>
            </validation-observer>
          </b-col>
        </b-col>
        <!-- /Register-->
      </b-row>
    </div>
    <front-footer />
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import SiteLogo from '@core/layouts/components/Logo.vue'
import { quillEditor } from 'vue-quill-editor'
import flatPickr from 'vue-flatpickr-component'
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
  BFormFile,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import FrontTopMenu from '@/components/FrontTopMenu.vue'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'
import LabelSubTitle from '@/components/LabelSubTitle.vue'

export default {
  components: {
    FrontTopMenu,
    FrontFooter,
    quillEditor,
    flatPickr,
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
    BFormFile,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      appLoading: false,
      presentationDateTimeClass: '',
      // User
      titleAndName: '',
      organization: '',
      organizationLogo: [],
      organizationWebsite: '',
      userBio: '',
      avatar: [],
      slideshows: [[], []],
      slideshow: [],
      //
      presentationTitle: '',
      //
      sideImg: require('@/assets/images/pages/register-v2.svg'),
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
    this.appLoading = document.getElementById('loading-bg')
    this.preActivate()
  },
  methods: {
    activate() {
      if (this.appLoading) {
        this.appLoading.style.display = 'block'
      }

      // console.log(params);return;
      this.$refs.activationForm.validate()
        .then(success => {
          const formData = new FormData()
          formData.append('name', this.titleAndName)
          formData.append('organization', this.organization)
          formData.append('organization_logo', this.organizationLogo)
          formData.append('organization_website', this.organizationWebsite)
          formData.append('bio', this.userBio)
          formData.append('avatar', this.avatar)

          //formData.append('slideshows', this.slideshows)
          formData.append('slideshow', this.slideshow)

          if (success) {
            const config = {
              headers: {
                UserActivation: this.$route.query.token,
                'content-type': 'multipart/form-data',
              },
            }
            this.$http.post('/user/activate', formData, config)
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
                  if (this.appLoading) {
                    this.appLoading.style.display = 'none'
                  }
                  return
                }
                this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: `Welcome ${response.data.userData.fullName || response.data.userData.username}`,
                    icon: 'CoffeeIcon',
                    variant: 'success',
                    text: 'Your account have been activated successfully',
                  },
                })

                useJwt.setToken(response.data.accessToken)
                useJwt.setRefreshToken(response.data.refreshToken)
                localStorage.setItem('userData', JSON.stringify(response.data.userData))
                this.$ability.update(response.data.userData.ability)
                this.$router.push('/')
              })
              .catch(error => {
                if (this.appLoading) {
                  this.appLoading.style.display = 'none'
                }
                this.$refs.activationForm.setErrors(error.response.data.error)
              })
          }
        })
    },
    preActivate() {
      const config = {
        headers: {
          UserActivation: this.$route.query.token,
        },
      }
      if (this.appLoading) {
        this.appLoading.style.display = 'block'
      }
      this.$http.get('/user/activate', config)
        .then(response => {
          if (response.status === 200) {
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
              if (this.appLoading) {
                this.appLoading.style.display = 'none'
              }
              return
            }
            this.titleAndName = response.data.name
            this.organization = response.data.organization.name
            this.organizationLogo = response.data.organization.logo
            this.organizationWebsite = response.data.organization.website
            this.userBio = response.data.bio
            this.avatar = response.data.avatar
          }
          if (this.appLoading) {
            this.appLoading.style.display = 'none'
          }
        })
        .catch(error => {
          if (this.appLoading) {
            this.appLoading.style.display = 'none'
          }
          this.$refs.activationForm.setErrors(error.response.data.error)
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
      placeholder: 'Please write down a short summary about yourself. We recommend you to select your most significant achievements. Avoid using too many acronyms that an international audience won’t be able to understand.',
    }

    return {
      editorOption,
    }
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
@import '@core/scss/vue/libs/quill.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
