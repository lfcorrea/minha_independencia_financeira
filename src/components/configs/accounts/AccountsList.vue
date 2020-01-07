<template>
    <div>
        <q-list bordered separator>
            <AccountItem v-for="account of accounts"
                :key="account.id"
                v-bind:id="account.id"
                v-bind:name="account.name"
                v-bind:bank="account.bank"
                v-bind:icon="account.icon"
                v-bind:owner="account.owner"
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
      showAddAccountDialog: false,
      accounts: [
        {
          id: '1',
          bank: 'Santander',
          name: 'Conta Corrente Santander',
          icon: 'account_balance',
          owner: 'Luiz Fernando',
          type: 'Conta Corrente'
        },
        {
          id: '2',
          bank: 'Banco do Brasil',
          name: 'Conta Corrente BB',
          icon: 'account_balance',
          owner: 'Luiz Fernando',
          type: 'Conta Corrente'
        },
        {
          id: '3',
          bank: 'Banco do Brasil',
          name: 'Poupança BB',
          icon: 'account_balance',
          owner: 'Luiz Fernando',
          type: 'Poupança'
        },
        {
          id: '4',
          bank: 'Carteira',
          name: 'Carteira Nando',
          icon: 'account_balance_wallet',
          owner: 'Luiz Fernando',
          type: 'Carteira'
        }
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
