<template>
  <q-page class="flex flex-center">
      <YearIncomes />
  </q-page>
</template>

<script>
import YearIncomes from '../../components/incomes/YearIncomes'

export default {
  name: 'Incomes',
  components: {
    YearIncomes
  }
}
</script>
