<template>
    <div>
        <q-list bordered separator>
            <PersonItem v-for="person of people"
                :key="person.id"
                v-bind:id="person.id"
                v-bind:name="person.name"
                v-bind:avatar="person.avatar"
                v-bind:avatar-color="person.avatarColor"
            />
        </q-list>
        <q-btn @click="showAddPersonDialog = !showAddPersonDialog" round color="primary" icon="add" ></q-btn>
        <q-dialog v-model="showAddPersonDialog">
            <q-card style="width: 300px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">Adicionar uma Pessoa</div>
                </q-card-section>
                <q-card-section>
                    <PersonForm />
                </q-card-section>
                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup ></q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import PersonItem from './PersonItem'
import PersonForm from './PersonForm'

export default {
  name: 'PersonList',
  components: {
    PersonItem,
    PersonForm
  },
  data () {
    return {
      showAddPersonDialog: false,
      people: [
        { id: '1', name: 'Person_1', avatar: 'face', avatarColor: 'blue' },
        { id: '2', name: 'Person_2', avatar: 'child_care', avatarColor: 'yellow' },
        { id: '3', name: 'Person_3', avatar: 'pets', avatarColor: 'green' }
      ]
    }
  },
  methods: {
    onAddPersonClick () {
      alert('Click')
    }
  }
}
</script>
