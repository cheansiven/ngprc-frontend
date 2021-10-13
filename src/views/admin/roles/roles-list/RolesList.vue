<template>
  <b-card
    no-body
    class="role-list"
  >
    <b-card-body>
      <b-card-title>Permissions</b-card-title>
      <b-card-sub-title>Permission according to roles</b-card-sub-title>
    </b-card-body>

    <b-table
      striped
      responsive
      :items="roleData"
      class="mb-0"
    >
      <!--      <template-->
      <!--        #cell(title)="data"-->
      <!--        style="vertical-align: top"-->
      <!--      >-->
      <!--        {{ data.value }}-->
      <!--      </template>-->

      <!--      <template #cell(permission)="data">-->
      <!--        <div-->
      <!--          v-for="p in data.value"-->
      <!--          style="display: inline-block;padding: 5px;"-->
      <!--        >-->
      <!--          <span style="background-color: green;padding: 5px 10px;color:#fff;border-radius: 15px">{{ permissionTitle(p.title) }}</span>-->
      <!--        </div>-->
      <!--      </template>-->

    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox, BRow, BCol,
} from 'bootstrap-vue'
import Vue from 'vue'
import useJwt from '@/auth/jwt/useJwt'

export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox, BRow, BCol,
  },
  data() {
    return {
      roleData: [],
    }
  },
  created() {
    useJwt.axiosIns.get('/user-role')
      .then(res => {
        const roles = res.data
        Vue.delete(roles, 'system_admin')
        this.roleData = roles
      })
  },
  methods: {
    permissionTitle(title) {
      if (!title) return ''
      let __title = title.replaceAll('_', ' ')
      __title = __title.charAt(0).toUpperCase() + __title.slice(1)
      return __title
    },
  },
}
</script>

<style>

</style>
