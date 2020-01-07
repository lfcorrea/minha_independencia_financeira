<template>
  <q-page class="flex flex-center">
    <CreditCardsList />
  </q-page>
</template>

<script>
import CreditCardsList from '../../components/configs/creditCards/CreditCardsList'
export default {
  name: 'CreditCards',
  components: {
    CreditCardsList
  }
}
</script>
