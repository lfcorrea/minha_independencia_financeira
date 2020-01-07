<template>
    <div class="q-pa-md">
      <form @submit.prevent.stop="onSubmit" class="q-pa-md">
        <div class="row q-mb-md">
          <q-input autogrow v-model="form.name" label="Nome" />
        </div>
        <div class="row q-mb-md">
          <SelectWithIcon :model="form.brand" :options="brands" label="Bandeira" />
        </div>
        <div class="row q-mb-md">
          <SelectWithIcon v-bind:model="form.owner" :options="people" label="Dono" />
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
        brand: null,
        owner: null
      },
      people: [
        { value: '1', label: 'Person_1', icon: 'face' },
        { value: '2', label: 'Person_2', icon: 'child_care' },
        { value: '3', label: 'Person_3', icon: 'pets' }
      ],
      brands: [
        { value: '1', label: 'Visa', icon: 'credit_card' },
        { value: '2', label: 'MasterCard', icon: 'credit_card' },
        { value: '3', label: 'Elo', icon: 'credit_card' },
        { value: '4', label: 'American Express', icon: 'credit_card' },
        { value: '5', label: 'Discovery Network', icon: 'credit_card' },
        { value: '6', label: 'Hipercard', icon: 'credit_card' },
        { value: '7', label: 'Diners Club', icon: 'credit_card' },
        { value: '8', label: 'Sorocard', icon: 'credit_card' },
        { value: '9', label: 'Policard', icon: 'credit_card' },
        { value: '10', label: 'Valecard', icon: 'credit_card' },
        { value: '11', label: 'Agicard', icon: 'credit_card' },
        { value: '12', label: 'JCB', icon: 'credit_card' },
        { value: '13', label: 'CredSystem', icon: 'credit_card' },
        { value: '14', label: 'Cabal', icon: 'credit_card' },
        { value: '15', label: 'Green Card', icon: 'credit_card' },
        { value: '16', label: 'Verocheque', icon: 'credit_card' },
        { value: '17', label: 'Avista', icon: 'credit_card' },
        { value: '18', label: 'Aura', icon: 'credit_card' }
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
