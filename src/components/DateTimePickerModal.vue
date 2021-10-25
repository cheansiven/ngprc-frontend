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
      let selectedDateTime = ''
      if (this.selectedDate !== '' || this.selectedTime !== '') {
        selectedDateTime = `${this.selectedDate} ${this.selectedTime}`.trim()
      }
      this.$emit('modal:update', false, selectedDateTime)
    },
  },
}
</script>
