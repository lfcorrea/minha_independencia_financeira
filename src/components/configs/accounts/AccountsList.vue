<template>
    <div>
        <q-list bordered separator>
            <AccountItem v-for="account of allAccounts"
                :key="account.id"
                v-bind:id="account.id"
                v-bind:name="account.description"
                v-bind:bank="account.bankId"
                v-bind:icon="account.avatar"
                v-bind:owner="account.ownerId"
                v-bind:type="account.type"
            />
        </q-list>
        <q-btn @click="showAddAccountDialog = !showAddAccountDialog" round color="primary" icon="add" ></q-btn>
        <q-dialog v-model="showAddAccountDialog">
            <q-card style="width: 300px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">Adicionar uma Conta</div>
                </q-card-section>
                <q-card-section>
                    <AccountForm />
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
import AccountItem from './AccountItem'
import AccountForm from './AccountForm'

export default {
  name: 'AccountsList',
  components: {
    AccountItem,
    AccountForm
  },
  data () {
    return {
      showAddAccountDialog: false
    }
  },
  methods: {
    ...mapActions(['fetchAccounts']),
    onAddPersonClick () {
      alert('Click')
    }
  },
  computed: {
    ...mapGetters(['allAccounts'])
  },
  created () {
    this.fetchAccounts()
  }
}
</script>
