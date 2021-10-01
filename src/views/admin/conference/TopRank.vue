<template>
  <ConferenceTable title="Top Rank" data_type="top" />
</template>
<script>
import ConferenceTable from './conference-table/ConferenceTable.vue'

export default {
  name: 'TopRank',
  components: {
    ConferenceTable,
  },
}
</script>

<style scoped>

</style>
