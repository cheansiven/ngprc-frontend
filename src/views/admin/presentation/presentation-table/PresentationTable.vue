<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-card-code
          :title="$props.title"
          :disable_code="true"
          :right_button_title="canUpdate ? 'New Presentation' : ''"
          @right_button_click="fnShowAddModal"
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
            :key="randKey"
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
                    <b-dropdown-item @click="loadEditModal(props.row.id)">
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
                <span
                  class="clickable"
                  @click="fnShowPresentationDetail(props.row.id)"
                >
                  <feather-icon
                    icon="EyeIcon"
                    size="16"
                    class="text-body align-middle mr-25"
                  />
                </span>
              </span>

              <span v-else-if="props.column.field == 'active'">
                {{ statusString(props.row.status) }}
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
    <presentation-add-modal
      :visible="isPresentationAddModalActive"
      :presentation_id="loadedPresentationId"
      :loading="saving"
      @update:modal="addPresentationAndUpdateModalState"
    />
    <presentation-preview-modal
      :presentation_id="loadedPresentationId"
      :visible="showPresentationModal"
      :close-only="$props.data_type == 'own'"
      @modal:update="approveOrPreview"
    />
    <b-modal
      title="Email Template"
      :visible="showEmailTemplateModal"
      size="xl"
      no-close-on-backdrop
      @close="showEmailTemplateModal = false"
    >
      <div style="width: 100%;height: 100vh;overflow: scroll">
        <EmailEditor
          ref="emailTemplateEditor"
          @load="emailTemplateEditorLoaded"
          @ready="emailTemplateEditorReady"
        />
        <div
          v-if="mailSending"
          id="presentation-spinner"
          class="spinner-in-modal"
        >
          <b-spinner />
        </div>
      </div>
      <template #modal-footer>
        <b-row>
          <b-col cols="12">
            <b-button
              right
              @click="sendEmail"
            >
              Send
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { EmailEditor } from 'vue-email-editor'
// eslint-disable-next-line import/no-unresolved
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem, BRow, BCol, BModal, BButton, BSpinner,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import sampleEmailTemplate from '@/@fake-db/data/json/sampleEmailTemplate.json'
import store from '@/store/index'
import PresentationAddModal from '@/views/admin/presentation/presentation-handler/PresentationAddModal.vue'
import useJwt from '@/auth/jwt/useJwt'
import PresentationPreviewModal from '@/views/admin/presentation/presentation-handler/PresentationPreviewModal.vue'

export default {
  components: {
    PresentationPreviewModal,
    EmailEditor,
    PresentationAddModal,
    BCardCode,
    VueGoodTable,
    BRow,
    BCol,
    BButton,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BModal,
    BSpinner,
  },
  props: {
    title: {
      type: String,
      default: 'Table Title',
    },
    // eslint-disable-next-line vue/prop-name-casing
    data_type: {
      type: String,
      default: 'all',
    },
  },
  data() {
    const columns = [
      {
        label: 'Proposal Date',
        field: 'event_date',
      },
      {
        label: 'Proposal Date (By Admin)',
        field: 'approved_event_date',
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
      approveSubmiting: false,
      mailSending: false,
      saving: false,
      appLoading: false,
      presentationFormats: [],
      showPresentationModal: false,
      showEmailTemplateModal: false,
      randKey: 0,
      loadedPresentationId: 0,
      canAdd: false,
      canUpdate: false,
      isPresentationAddModalActive: false,
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

    this.appLoading = document.getElementById('loading-bg')

    if (this.appLoading) {
      this.appLoading.style.display = 'block'
    }

    useJwt.axiosIns.get(`/presentation/type/${this.$props.data_type}`)
      .then(res => {
        this.rows = res.data
        if (this.appLoading) {
          this.appLoading.style.display = 'none'
        }
      }).catch(() => {
        // console.log(error.response.data.message)
        // if (error.response.data.message === 'Invalid bearer token') {
        //   const promise = await useJwt.refreshToken()
        //   console.log(promise)
        // }
        if (this.appLoading) {
          this.appLoading.style.display = 'none'
        }
      })
  },
  methods: {
    async emailTemplateEditorLoaded() {
      console.log('editorLoaded')
      // Pass the template JSON here
      this.$refs.emailTemplateEditor.editor.loadDesign(sampleEmailTemplate)
    },
    // called when the editor has finished loading
    emailTemplateEditorReady() {
      console.log('editorReady')
    },
    assignResponseToVariable(response) {
      if (response && response.data) {
        if (!response.data.error) {
          if (response.data.update) {
            // eslint-disable-next-line camelcase
            let current_index = -1
            this.rows.forEach((el, index) => {
              // eslint-disable-next-line camelcase
              if (el.id === response.data.updated_data.id) current_index = index
            })
            // eslint-disable-next-line camelcase
            if (current_index !== -1) {
              this.rows[current_index] = response.data.updated_data
            }
          } else {
            this.rows.push(response.data)
          }
          this.randKey = Math.floor(Math.random() * 9999)
        }
      }
    },
    addPresentationAndUpdateModalState(status, response) {
      this.isPresentationAddModalActive = false
      this.assignResponseToVariable(response)
    },
    fnShowAddModal() {
      this.loadedPresentationId = 0
      this.isPresentationAddModalActive = true
    },
    fnShowPresentationDetail(id) {
      this.loadedPresentationId = id
      this.showPresentationModal = true
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
    approveOrPreview(status, data) {
      this.showPresentationModal = status
      if (!data) return
      this.showEmailTemplateModal = true
    },
    sendEmail() {
      this.mailSending = true
      this.$refs.emailTemplateEditor.editor.exportHtml(
        design => {
          const { html } = design

          const data = {
            html,
            id: this.loadedPresentationId,
          }

          useJwt.axiosIns.post(`mail/presentation/${this.loadedPresentationId}`, data)
            .then(res => {
              if (res.status === 200 && !res.data.error) {
                this.loadedPresentationId = 0
                this.showEmailTemplateModal = false
              }
              this.mailSending = false
              console.log(res)
            }).catch(error => {
              console.log('ERROR ')
              console.log(error)
              this.mailSending = false
            })
        },
      )
    },
    saveMailTemplate() {
      this.mailSending = true
      this.$refs.emailTemplateEditor.editor.saveDesign(design => {
        useJwt.axiosIns.post('mail/template', { json: design })
          .then(res => {
            this.mailSending = false
            console.log(res)
          }).catch(error => {
            this.mailSending = false
          console.log(error)
          })
      })
    },
  },
}
</script>

<style lang="scss" >
@import '@core/scss/vue/libs/vue-good-table.scss';
</style>
