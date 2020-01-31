<template>
    <div>
        <q-list bordered separator>
            <PersonItem v-for="person of allPeople"
                :key="person.id"
                v-bind:id="person.id"
                v-bind:user-id="person.userId"
                v-bind:name="person.name"
                v-bind:avatar="person.avatar"
                v-bind:avatar-color="person.avatarColor"
                v-bind:default="person.default"
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
import { mapGetters, mapActions } from 'vuex'
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
      showAddPersonDialog: false
    }
  },
  methods: {
    ...mapActions(['fetchPeople']),
    onAddPersonClick () {
      alert('Click')
    }
  },
  computed: {
    ...mapGetters(['allPeople'])
  },
  created () {
    this.fetchPeople()
  }
}
</script>
