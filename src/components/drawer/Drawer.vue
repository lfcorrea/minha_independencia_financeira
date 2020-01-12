<template>
  <div>
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-2"
      >
        <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered class="rounded-borders">
          <Incomes />

          <Outcomes />

          <Investiments />

          <FinancialIndependence />

          <StocksRadar />

          <Configs />

        </q-list>
      </div>
      </q-drawer>
  </div>
</template>

<script>
import Incomes from './Incomes'
import Outcomes from './Outcomes'
import Investiments from './Investiments'
import FinancialIndependence from './FinancialIndependence'
import StocksRadar from './StocksRadar'
import Configs from './Configs'

export default {
  name: 'Drawer',
  components: {
    Incomes,
    Outcomes,
    Investiments,
    FinancialIndependence,
    StocksRadar,
    Configs
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
