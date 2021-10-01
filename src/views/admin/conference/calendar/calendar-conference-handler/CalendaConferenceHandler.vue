<template>
  <div>
    <b-sidebar
      id="sidebar-add-new-conference"
      sidebar-class="sidebar-lg"
      :visible="isConferenceHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-conference-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5 class="mb-0">
            {{ conferenceLocal.id ? 'Update': 'Add' }} Conference
          </h5>
          <div>
            <feather-icon
              v-if="conferenceLocal.id"
              icon="TrashIcon"
              class="cursor-pointer"
              @click="$emit('remove-conference'); hide();"
            />
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>

        <!-- Body -->
        <validation-observer
          #default="{ handleSubmit }"
          ref="refFormObserver"
        >

          <!-- Form -->
          <b-form
            class="p-2"
            @submit.prevent="handleSubmit(onSubmit)"
            @reset.prevent="resetForm"
          >

            <!-- Title -->
            <validation-provider
              #default="validationContext"
              name="Subject"
              rules="required"
            >
              <b-form-group
                label="Subject"
                label-for="conference-subject"
              >
                <b-form-input
                  id="conference-subject"
                  v-model="conferenceLocal.subject"
                  autofocus
                  :state="getValidationState(validationContext)"
                  trim
                  placeholder="Conference Subject"
                />

                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- Calendar -->
            <validation-provider
              #default="validationContext"
              name="Calendar"
              rules="required"
            >

              <b-form-group
                label="Calendar"
                label-for="calendar"
                :state="getValidationState(validationContext)"
              >
                <v-select
                  v-model="conferenceLocal.extendedProps.calendar"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="calendarOptions"
                  label="label"
                  :reduce="calendar => calendar.label"
                  input-id="calendar"
                >

                  <template #option="{ color, label }">
                    <div
                      class="rounded-circle d-inline-block mr-50"
                      :class="`bg-${color}`"
                      style="height:10px;width:10px"
                    />
                    <span> {{ label }}</span>
                  </template>

                  <template #selected-option="{ color, label }">
                    <div
                      class="rounded-circle d-inline-block mr-50"
                      :class="`bg-${color}`"
                      style="height:10px;width:10px"
                    />
                    <span> {{ label }}</span>
                  </template>
                </v-select>

                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- Start Date -->
            <validation-provider
              #default="validationContext"
              name="Start Date"
              rules="required"
            >

              <b-form-group
                label="Start Date"
                label-for="start-date"
                :state="getValidationState(validationContext)"
              >
                <flat-pickr
                  v-model="conferenceLocal.start"
                  class="form-control"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- End Date -->
            <validation-provider
              #default="validationContext"
              name="End Date"
              rules="required"
            >

              <b-form-group
                label="End Date"
                label-for="end-date"
                :state="getValidationState(validationContext)"
              >
                <flat-pickr
                  v-model="conferenceLocal.end"
                  class="form-control"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i'}"
                />
                <b-form-invalid-feedback :state="getValidationState(validationContext)">
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <!-- Guests -->
            <b-form-group
              label="Add Guests"
              label-for="add-guests"
            >
              <v-select
                v-model="conferenceLocal.extendedProps.guests"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                :close-on-select="false"
                :options="guestsOptions"
                label="name"
                input-id="add-guests"
              >

                <template #option="{ avatar, name }">
                  <b-avatar
                    size="sm"
                    :src="avatar"
                  />
                  <span class="ml-50 align-middle"> {{ name }}</span>
                </template>

                <template #selected-option="{ avatar, name }">
                  <b-avatar
                    size="sm"
                    class="border border-white"
                    :src="avatar"
                  />
                  <span class="ml-50 align-middle"> {{ name }}</span>
                </template>
              </v-select>
            </b-form-group>

            <!-- Location -->
            <b-form-group
              label="Location"
              label-for="conference-location"
            >
              <b-form-input
                id="conference-location"
                v-model="conferenceLocal.extendedProps.location"
                trim
                placeholder="Conference Location"
              />
            </b-form-group>

            <!-- Textarea -->
            <b-form-group
              label="Description"
              label-for="conference-description"
            >
              <b-form-textarea
                id="conference-description"
                v-model="conferenceLocal.extendedProps.description"
              />
            </b-form-group>

            <!-- Form Actions -->
            <div class="d-flex mt-2">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mr-2"
                type="submit"
              >
                {{ conferenceLocal.id ? 'Update' : 'Add ' }}
              </b-button>
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="outline-secondary"
              >
                Reset
              </b-button>
            </div>
          </b-form>
        </validation-observer>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BAvatar, BFormTextarea, BButton, BFormInvalidFeedback,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email, url } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { ref, toRefs } from '@vue/composition-api'
import useCalendarConferenceHandler from './useCalendarConferenceHandler'

export default {
  components: {
    BButton,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BAvatar,
    vSelect,
    flatPickr,
    ValidationProvider,
    BFormInvalidFeedback,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isConferenceHandlerSidebarActive',
    conference: 'update:is-conference-handler-sidebar-active',
  },
  props: {
    isConferenceHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    conference: {
      type: Object,
      required: true,
    },
    clearConferenceData: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      required,
      email,
      url,
    }
  },
  setup(props, { emit }) {
    /*
     ? This is handled quite differently in SFC due to deadlock of `useFormValidation` and this composition function.
     ? If we don't handle it the way it is being handled then either of two composition function used by this SFC get undefined as one of it's argument.
     * The Trick:

     * We created reactive property `clearFormData` and set to null so we can get `resetConferenceLocal` from `useCalendarConferenceHandler` composition function.
     * Once we get `resetConferenceLocal` function which is required by `useFormValidation` we will pass it to `useFormValidation` and in return we will get `clearForm` function which shall be original value of `clearFormData`.
     * Later we just assign `clearForm` to `clearFormData` and can resolve the deadlock. 😎

     ? Behind The Scene
     ? When we passed it to `useCalendarConferenceHandler` for first time it will be null but right after it we are getting correct value (which is `clearForm`) and assigning that correct value.
     ? As `clearFormData` is reactive it is being changed from `null` to corrent value and thanks to reactivity it is also update in `useCalendarConferenceHandler` composition function and it is getting correct value in second time and can work w/o any issues.
    */
    const clearFormData = ref(null)

    const {
      conferenceLocal,
      resetConferenceLocal,
      calendarOptions,

      // UI
      onSubmit,
      guestsOptions,
    } = useCalendarConferenceHandler(toRefs(props), clearFormData, emit)

    const {
      refFormObserver,
      getValidationState,
      resetForm,
      clearForm,
    } = formValidation(resetConferenceLocal, props.clearConferenceData)

    clearFormData.value = clearForm

    return {
      // Add New Conference
      conferenceLocal,
      calendarOptions,
      onSubmit,
      guestsOptions,

      // Form Validation
      resetForm,
      refFormObserver,
      getValidationState,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
