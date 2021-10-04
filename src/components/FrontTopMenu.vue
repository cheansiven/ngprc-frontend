<template>
  <nav
    id="top-menu"
    :style="$props.isStatic ? {'position':'relative','top':'unset'} : {}"
  >
    <b-img src="@/assets/images/logo/logo.png" />
    <b-nav
      align="right"
      class="top-menu"
    >
      <b-nav-item
        :to="{name : 'home'}"
        :active="this.$route.name == 'home'"
      >
        Home
      </b-nav-item>
      <b-nav-item
        :to="{name : 'presentation'}"
        :active="this.$route.name == 'presentation'"
      >
        Presentation
      </b-nav-item>
      <b-nav-item
        :to="{name : 'presenter'}"
        :active="this.$route.name == 'presenter'"
      >
        Presenter
      </b-nav-item>
<!--      <b-nav-item-->
<!--        :to="{name : 'conference'}"-->
<!--        :active="this.$route.name == 'conference'"-->
<!--      >-->
<!--        Conferences-->
<!--      </b-nav-item>-->

<!--      <b-nav-item-dropdown-->
<!--        id="my-nav-dropdown"-->
<!--        text="Achievements"-->
<!--        toggle-class="nav-link-custom"-->
<!--        right-->
<!--      >-->
<!--        <b-dropdown-item-->
<!--          :to="{name : 'blog'}"-->
<!--          :active="this.$route.name == 'blog'"-->
<!--        >-->
<!--          Blog-->
<!--        </b-dropdown-item>-->
<!--      </b-nav-item-dropdown>-->

      <b-nav-item v-if="!userData" :to="{name: 'auth-login'}">
        Login
      </b-nav-item>
      <b-nav-item-dropdown
          v-if="userData"
          right
          toggle-class="d-flex align-items-center dropdown-user-link"
          class="dropdown-user "
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              {{ userData.fullName || userData.username }}
            </p>
            <span class="user-status">{{ userData.role }}</span>
          </div>
          <b-avatar
              size="40"
              :src="userData.avatar"
              variant="light-primary"
              badge
              class="badge-minimal"
              badge-variant="success"
          >
            <feather-icon
                v-if="!userData.fullName"
                icon="UserIcon"
                size="22"
            />
          </b-avatar>
        </template>
        <b-dropdown-item
            :to="{ name: 'user-profile'}"
            link-class="d-flex align-items-center"
        >
          <feather-icon
              size="16"
              icon="UserIcon"
              class="mr-50"
          />
          <span>Profile</span>
        </b-dropdown-item>
        <b-dropdown-item
            :to="{ name: 'user-email' }"
            link-class="d-flex align-items-center"
        >
          <feather-icon
              size="16"
              icon="MailIcon"
              class="mr-50"
          />
          <span>Inbox</span>
        </b-dropdown-item>
        <b-dropdown-item
            :to="{ name: 'user-chat' }"
            link-class="d-flex align-items-center"
        >
          <feather-icon
              size="16"
              icon="MessageSquareIcon"
              class="mr-50"
          />
          <span>Chat</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item
            :to="{ name: 'user-setting' }"
            link-class="d-flex align-items-center"
        >
          <feather-icon
              size="16"
              icon="SettingsIcon"
              class="mr-50"
          />
          <span>Settings</span>
        </b-dropdown-item>
        <b-dropdown-item
            link-class="d-flex align-items-center"
            @click="logout"
        >
          <feather-icon
              size="16"
              icon="LogOutIcon"
              class="mr-50"
          />
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </nav>
</template>

<script>
import {
  BNav, BNavItem, BNavItemDropdown, BDropdownItem, BImg, BAvatar
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import useJwt from '@/auth/jwt/useJwt'
import { initialAbility } from '@/libs/acl/config'

export default {
  components: {
    BImg,
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    BAvatar,
  },
  props: {
    isStatic: {
      default: false,
    },
  },
  data() {
    let userData = false
    if (localStorage.getItem('userData')) {
      userData = JSON.parse(localStorage.getItem('userData'))
    }
    return {
      userData,
      avatarText,
    }
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>
