<template>
  <div>
    <div class="p-4 sub-footer">
      <b-row>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">
            Organizing commitee
          </div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-gray-600">
              Olaf Rymsberg
            </li>
            <li class="hover:text-orange text-gray-600">
              Diana Feinholm
            </li>
            <li class="hover:text-orange text-gray-600">
              Wei Li Chan
            </li>
          </ul>
        </b-col>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">
            Legal information
          </div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-gray-600">
              Privacy Statement
            </li>
            <li class="hover:text-orange text-gray-600">
              Impressum
            </li>
          </ul>
        </b-col>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">
            Support
          </div>
          <ul class="list-reset leading-normal">
            <li class="hover:text-orange text-gray-600">
              Technical support
            </li>
            <li class="hover:text-orange text-gray-600">
              Contact the organizers
            </li>
          </ul>
        </b-col>
        <b-col sm="3">
          <div class="text-base font-bold mb-2 color-gray-800">
            Newsletter
          </div>
          <p class="text-gray-600 leading-normal">
            Put yourself on the mailing list.
          </p>
          <div class="mt-4 flex">
            <input
              type="text"
              style="border-radius: 2px"
              class="p-2 border border-gray-200 round text-gray-700 text-sm h-auto"
              placeholder="Your email address"
            >
            <button class="bg-gray-800 text-white rounded-sm h-auto text-xs p-3">
              Subscribe
            </button>
          </div>
        </b-col>
      </b-row>
    </div>
    <footer
      class="footer footer-light"
      :class="['footer-static']"
    >
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>
  </div>
</template>

<script>
import {
  BRow, BCol,
} from 'bootstrap-vue'
import AppFooter from '@core/layouts/components/AppFooter.vue'

export default {
  components: {
    BRow,
    BCol,
    AppFooter,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
