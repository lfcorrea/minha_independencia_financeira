<template>
<div>
  <q-item v-ripple>
    <q-item-section avatar>
      <q-icon :name="avatar" :color="avatarColor"></q-icon>
    </q-item-section>
    <q-item-section>{{name}}</q-item-section>
    <q-item-section class="q-pa-md">
      <q-icon @click="onEditClick" class="material-icons" name="edit"></q-icon>
    </q-item-section>
  </q-item>
</div>
</template>

<script>
export default {
  name: 'PersonItem',
  props: ['id', 'user-id', 'name', 'avatar', 'avatarColor', 'default'],
  methods: {
    onEditClick () {
      alert('On Person click')
    }
  }
}
</script>
