<template>
  <ConferenceTable title="Coming soon" data_type="coming_soon" />
</template>
<script>
import ConferenceTable from './conference-table/ConferenceTable.vue'

export default {
  name: 'Conference',
  components: {
    ConferenceTable,
  },
}
</script>

<style scoped>

</style>
