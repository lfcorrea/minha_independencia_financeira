<template>
  <div>
    <q-item v-ripple>
      <q-item-section avatar>
        <q-icon :name="icon"></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{name}}</q-item-label>
        <q-item-label caption>{{ownerId}}</q-item-label>
        <q-item-label caption>{{bankId}}</q-item-label>
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
    'bankId',
    'icon',
    'name',
    'type',
    'ownerId'
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
