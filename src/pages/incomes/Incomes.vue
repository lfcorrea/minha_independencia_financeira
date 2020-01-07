<template>
  <q-page class="flex flex-center">
    <div>
      <MonthIncomes />
    </div>
    <div>
      <YearIncomes />
    </div>
  </q-page>
</template>

<script>
import MonthIncomes from '../../components/incomes/MonthIncomes'
import YearIncomes from '../../components/incomes/YearIncomes'

export default {
  name: 'Incomes',
  components: {
    MonthIncomes,
    YearIncomes
  }
}
</script>
