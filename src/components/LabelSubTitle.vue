<template>
  <span class="label-sub-title">{{ $props.title }}</span>
</template>

<script>
export default {
  components: {
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
