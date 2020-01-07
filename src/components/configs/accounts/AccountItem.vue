<template>
  <div>
    <q-item v-ripple :active="active">
      <q-item-section avatar>
        <q-icon :name="icon"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{name}}</q-item-label>
        <q-item-label caption>{{owner}}</q-item-label>
        <q-item-label caption>{{bank}}</q-item-label>
        <q-item-label caption>{{type}}</q-item-label>
      </q-item-section>
      <q-item-section class="q-pa-sm">
        <q-icon @click="onEditClick" class="material-icons" name="edit"></q-icon>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'AccountItem',
  props: [
    'id',
    'bank',
    'icon',
    'name',
    'type',
    'owner'
  ],
  methods: {
    onEditClick () {
      alert('On Edit Account click')
    }
  }
}
</script>

<style>

</style>
