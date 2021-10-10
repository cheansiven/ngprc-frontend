<template>
  <div class="rich-text-editor">
    <editor
        cloud-channel="5"
        :disabled=false
        id="uuid"
        :init= "{}"
        initial-value=""
        :inline=true
        model-events= ""
        plugins=""
        tag-name="div"
        toolbar=""
        value=""
    />
  </div>
</template>

<script>

import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    Editor,
  },
}
</script>

<style scoped>

</style>
