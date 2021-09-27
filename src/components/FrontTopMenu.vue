<template>
  <nav id="top-menu" v-bind:style="$props.isStatic ? {'position':'relative','top':'unset'} : {}">
    <b-img src="@/assets/images/logo/logo.png" />
    <b-nav
        align="right"
        class="top-menu"
    >
      <b-nav-item :to="{name : 'home'}" :active="this.$route.name == 'home'">Home</b-nav-item>
      <b-nav-item  :to="{name : 'presentation'}" :active="this.$route.name == 'presentation'">Presentation</b-nav-item>
      <b-nav-item  :to="{name : 'presenter'}" :active="this.$route.name == 'presenter'">Presenter</b-nav-item>
      <b-nav-item  :to="{name : 'conference'}" :active="this.$route.name == 'conference'">Conferences</b-nav-item>
      <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="Achievements"
          toggle-class="nav-link-custom"
          right
      >
        <b-dropdown-item :to="{name : 'video'}" :active="this.$route.name == 'video'" >Video</b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item :to="{name : 'blog'}" :active="this.$route.name == 'blog'">Blog</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item :to="{name: 'auth-login'}">
        Login
      </b-nav-item>
    </b-nav>
  </nav>
</template>

<script>
import {
  BNav, BNavItem, BNavItemDropdown, BDropdownDivider, BDropdownItem, BImg,
} from 'bootstrap-vue'

export default {
  components: {
    BImg,
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownDivider,
    BDropdownItem,
  },
  props: {
    isStatic: false,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
