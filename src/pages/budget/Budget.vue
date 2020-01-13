<template>
  <q-page padding>
    <YearlyBudget />
  </q-page>
</template>

<script>
import YearlyBudget from '../../components/budget/YearlyBudget'

export default {
  name: 'Budget',
  components: {
    YearlyBudget
  }
}
</script>
