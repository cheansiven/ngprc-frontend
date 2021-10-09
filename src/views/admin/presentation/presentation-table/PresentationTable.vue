<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card-code
          :title="$props.title"
          :disable_code="true"
          :right_button_title="canUpdate ? 'New Presentation' : ''"
          @right_button_click="loadAddModal"
        >
          <!-- search input -->
          <div class="custom-search d-flex justify-content-end">
            <b-form-group>
              <div class="d-flex align-items-center">
                <label class="mr-1">Search</label>
                <b-form-input
                  v-model="searchTerm"
                  placeholder="Search"
                  type="text"
                  class="d-inline-block"
                />
              </div>
            </b-form-group>
          </div>

          <!-- table -->
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :rtl="direction"
            :search-options="{
              enabled: true,
              externalQuery: searchTerm }"
            :select-options="{
              enabled: true,
              selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
              selectionInfoClass: 'custom-class',
              selectionText: 'rows selected',
              clearSelectionText: 'clear',
              disableSelectInfo: true, // disable the select info panel on top
              selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
            }"
            :pagination-options="{
              enabled: true,
              perPage:pageLength
            }"
            :key="randKey"
          >
            <template
              slot="table-row"
              slot-scope="props"
            >

              <!-- Column: Action -->
              <span v-if="props.column.field === 'action'">
                <span v-if="canUpdate">
                  <b-dropdown
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template v-slot:button-content>
                      <feather-icon
                        icon="MoreVerticalIcon"
                        size="16"
                        class="text-body align-middle mr-25"
                      />
                    </template>
                    <b-dropdown-item  @click="loadEditModal(props.row.id)">
                      <feather-icon
                        icon="Edit2Icon"
                        class="mr-50"
                      />
                      <span>Edit</span>
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                      />
                      <span>Delete</span>
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </span>

              <span v-else-if="props.column.field == 'active'">
                {{ statusString(props.row.active) }}
              </span>

              <!-- Column: Common -->
              <span v-else>
                {{ props.formattedRow[props.column.field] }}
              </span>
            </template>

            <!-- pagination -->
            <template
              slot="pagination-bottom"
              slot-scope="props"
            >
              <div class="d-flex justify-content-between flex-wrap">
                <div class="d-flex align-items-center mb-0 mt-1">
                  <span class="text-nowrap ">
                    Showing 1 to
                  </span>
                  <b-form-select
                    v-model="pageLength"
                    :options="['3','5','10']"
                    class="mx-1"
                    @input="(value)=>props.perPageChanged({currentPerPage:value})"
                  />
                  <span class="text-nowrap"> of {{ props.total }} entries </span>
                </div>
                <div>
                  <b-pagination
                    :value="1"
                    :total-rows="props.total"
                    :per-page="pageLength"
                    first-number
                    last-number
                    align="right"
                    prev-class="prev-item"
                    next-class="next-item"
                    class="mt-1 mb-0"
                    @input="(value)=>props.pageChanged({currentPage:value})"
                  >
                    <template #prev-text>
                      <feather-icon
                        icon="ChevronLeftIcon"
                        size="18"
                      />
                    </template>
                    <template #next-text>
                      <feather-icon
                        icon="ChevronRightIcon"
                        size="18"
                      />
                    </template>
                  </b-pagination>
                </div>
              </div>
            </template>
          </vue-good-table>
        </b-card-code>
      </b-col>
    </b-row>
    <presentation-handler
      :visible="isPresentationHandlerSidebarActive"
      :presentation="loadedPresentation"
      @update:modal="addPresentationAndUpdateModalState"
    />
  </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem, BRow, BCol,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import PresentationHandler from '@/views/admin/presentation/presentation-handler/PresentationHandler.vue'
import useJwt from '@/auth/jwt/useJwt'
import { can } from '@/@core/libs/acl/utils'

export default {
  components: {
    PresentationHandler,
    BCardCode,
    VueGoodTable,
    BRow,
    BCol,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
  },
  props: {
    title: {
      default: 'Table Title',
    },
    data_type: {
      default: 'all',
    },
  },
  data() {
    const columns = [
      {
        label: 'Proposal Date',
        field: 'event_date',
      }, {
        label: 'Title',
        field: 'title',
      }, {
        label: 'Author',
        field: 'author.name',
      }, {
        label: 'Status',
        field: 'active',
      }, {
        label: 'Action',
        field: 'action',
      },
      // {
      //   id: 1,
      //   presenter_email: 'presenter-email@test.com',
      //   presentation_email: 'event-email@test.com',
      //   presentation_phone: '+855 884 556',
      //   organization: 'Donec sollicitudin',
      //   presenter_position: 'Developer',
      //   abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      //   keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      //   post_date: '12/10/2021 8:30',
      // },
    ]

    return {
      randKey: 0,
      loadedPresentation: {},
      canAdd: false,
      canUpdate: false,
      isPresentationHandlerSidebarActive: false,
      pageLength: 3,
      dir: false,
      columns,
      rows: [],
      searchTerm: '',
    }
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.canAdd = true
    this.canUpdate = true

    const config = {
      headers: {
        Authorization: `${useJwt.jwtConfig.tokenType} ${useJwt.getToken()}`,
      },
    }
    this.$http.get(`/presentation/type/${this.$props.data_type}`, config)
      .then(res => { this.rows = res.data; console.log('res.data ', res.data) })
  },
  methods: {
    async addPresentationAndUpdateModalState(val, data) {
      const config = {
        headers: {
          Authorization: `${useJwt.jwtConfig.tokenType} ${useJwt.getToken()}`,
        },
      }
      await this.$http.post('presentation', data, config)
        .then(response => {
          if (response.status === 200) {
            if (!response.data.error) {
              if (response.data.update) {
                response.data.updated_data.id
                let current_index = -1
                this.rows.forEach((el, index) => {
                  if (el.id === response.data.updated_data.id) current_index = index
                })
                if (current_index !== -1) {
                  this.rows[current_index] = response.data.updated_data
                }
              }else{
                this.rows.push(response.data)
              }
              this.randKey = Math.floor(Math.random() * 9999)
            }
          }
          return true
        })
        .catch(error => {
          console.log(error)
          return false
        })
       this.isPresentationHandlerSidebarActive = val
    },
    async loadEditModal(id) {
      const config = {
        headers: {
          Authorization: `${useJwt.jwtConfig.tokenType} ${useJwt.getToken()}`,
        },
      }
      this.$http.get(`/presentation/${id}`, config)
        .then(res => {
          if (res.status === 200) {
            if (!res.data.error) {
              this.loadedPresentation = res.data
              this.isPresentationHandlerSidebarActive = true
            }
          }
        })
    },
    loadAddModal() {
      this.loadedPresentation = {}
      this.isPresentationHandlerSidebarActive = true
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
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
