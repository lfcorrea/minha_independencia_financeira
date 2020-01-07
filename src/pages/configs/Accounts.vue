<template>
  <q-page class="flex flex-center">
    <AccountsList />
  </q-page>
</template>

<script>
import AccountsList from '../../components/configs/accounts/AccountsList'

export default {
  name: 'Accounts',
  components: {
    AccountsList
  }
}
</script>
