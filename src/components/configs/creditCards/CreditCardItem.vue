<template>
  <div>
    <q-item v-ripple>
      <q-item-section avatar>
        <q-icon name="credit_card"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{name}}</q-item-label>
        <q-item-label>{{owner.name}}</q-item-label>
        <q-item-label>Fechamento: {{closingDay}}</q-item-label>
        <q-item-label>Pagamento: {{payDay}}</q-item-label>
      </q-item-section>
      <q-item-section class="q-pa-md">
        <q-icon @click="onEditClick" class="material-icons" name="edit"></q-icon>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'CredtiCardItem',
  props: [
    'id',
    'name',
    'brand',
    'owner',
    'closingDay',
    'payDay'
  ],
  methods: {
    onEditClick () {
      alert('On Edit Credit Card click')
    }
  }
}
</script>

<style>

</style>
