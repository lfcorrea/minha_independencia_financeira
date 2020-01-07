<template>
  <q-select
    clearable
    v-model="model"
    :options="options"
    :label="label" >
    <template v-slot:option="scope">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section avatar>
          <q-icon :name="scope.opt.icon" ></q-icon>
        </q-item-section>
        <q-item-section v-html="scope.opt.label" ></q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  name: 'SelectWithIcon',
  props: [
    'model',
    'options',
    'label'
  ]

}
</script>

<style>

</style>
