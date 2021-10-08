<template>
  <div>
    <b-modal
      modal-class="md-date-picker"
      :visible="$props.visible"
      no-close-on-backdrop
      size="xs"
      hide-footer
      @close="onClose"
    >
      <b-row>
        <b-col
          cols="12"
          class="margin-bottom-10"
        >
          <b-calendar
            :hide-header="true"
            block
            v-model="selectedDate"
          />
        </b-col>
        <b-col
          cols="12"
          class="margin-bottom-10"
        >
          <b-form-timepicker
            block
            v-model="selectedTime"
          />
        </b-col>
        <b-col
            cols="12"
            class="margin-bottom-10"
        >
          <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="outline-primary"
              @click="onClose"
          >
            Close
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment'
import {
  BRow, BCol, BModal, BFormTimepicker, BCalendar, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BModal,
    BFormTimepicker,
    BCalendar,
    BButton,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedDate: '',
      selectedTime: '',
    }
  },
  mounted() {
  },
  methods: {
    onClose() {
      console.log('selectedDate', this.selectedDate)
      console.log('selectedTime', this.selectedTime)
      const selectedDateTime = `${this.selectedDate} ${this.selectedTime}`
      this.$emit('update:modal', false, selectedDateTime)
    },
  },
}
</script>
