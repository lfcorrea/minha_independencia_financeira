<template>
    <div style="max-width: 300px">
      <form @submit.prevent.stop="onSubmit">
        <div class="row q-mb-md">
          <q-input autogrow v-model="form.username" label="Nome" />
        </div>
        <div class="row q-mb-md">
          <q-btn-toggle
            v-model="form.avatar"
            push
            glossy
            dense
            :options="[
              {value:'face', slot:'one'},
              {value:'child_care', slot:'two'},
              {value:'pets', slot:'three'},
            ]"
          >
            <template v-slot:one>
              <div class="items-center">
                <q-icon name="face"></q-icon>
              </div>
            </template>
            <template v-slot:two>
              <div class="items-center">
                <q-icon name="child_care"></q-icon>
              </div>
            </template>
            <template v-slot:three>
              <div class="items-center">
                <q-icon name="pets"></q-icon>
              </div>
            </template>
          </q-btn-toggle>
        </div>
        <div class="row q-mb-md">
          <q-color popover v-model="form.avatarColor" label="Cor" />
        </div>
        <div>
          <q-btn label="OK--" type="submit" color="primary"></q-btn>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  name: 'PersonForm',
  data () {
    return {
      form: {
        username: null,
        avatar: null,
        avatarColor: null
      }
    }
  },
  methods: {
    onSubmit () {
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
