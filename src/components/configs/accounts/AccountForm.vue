<template>
    <div class="q-pa-md">
      <form @submit.prevent.stop="onSubmit" class="q-pa-md">
        <div class="row q-mb-md">
          <q-input autogrow v-model="form.name" label="Nome" />
        </div>
        <div class="row q-mb-md">
          <SelectWithIcon :model="form.bank" :options="banks" label="Banco" />
        </div>
        <div class="row q-mb-md">
          <SelectWithIcon v-bind:model="form.owner" :options="people" label="Dono" />
        </div>
        <div class="row q-mb-md">
          <SelectWithIcon v-bind:model="form.type" :options="types" label="Tipo" />
        </div>
        <div>
          <q-btn label="OK--" type="submit" color="primary"></q-btn>
        </div>
      </form>
    </div>
</template>

<script>
import SelectWithIcon from '../../forms/SelectWithIcon'

export default {
  name: 'CreditForm',
  components: {
    SelectWithIcon
  },
  data () {
    return {
      form: {
        id: null,
        name: null,
        bank: null,
        owner: null,
        type: null
      },
      people: [
        { value: '1', label: 'Person_1', icon: 'face' },
        { value: '2', label: 'Person_2', icon: 'child_care' },
        { value: '3', label: 'Person_3', icon: 'pets' }
      ],
      types: [
        { value: '1', label: 'Conta Corrente', icon: 'credit_card' },
        { value: '2', label: 'Poupança', icon: 'credit_card' },
        { value: '3', label: 'Poupança Resgate Automático', icon: 'credit_card' },
        { value: '4', label: 'Carteira', icon: 'credit_card' }
      ],
      banks: [
        { value: '1', label: 'Banco do Brasil', icon: 'account_balance' },
        { value: '2', label: 'Caixa Econômica Federal', icon: 'account_balance' },
        { value: '3', label: 'Santander', icon: 'account_balance' },
        { value: '4', label: 'Bradesco', icon: 'account_balance' },
        { value: '5', label: 'Itau', icon: 'account_balance' },
        { value: '6', label: 'HSBC', icon: 'account_balance' },
        { value: '7', label: 'Carteira', icon: 'account_balance_wallet' }
      ]
    }
  },
  methods: {
    onSubmit () {
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style>

</style>
