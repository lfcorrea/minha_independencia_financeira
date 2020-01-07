<template>
    <div>
        <q-list bordered separator>
            <CreditCardItem v-for="creditCard of creditCards"
                :key="creditCard.id"
                v-bind:id="creditCard.id"
                v-bind:name="creditCard.name"
                v-bind:brand="creditCard.brand"
                v-bind:owner="creditCard.owner"
            />
        </q-list>
        <q-btn @click="showAddCreditCardDialog = !showAddCreditCardDialog" round color="primary" icon="add" ></q-btn>
        <q-dialog v-model="showAddCreditCardDialog">
            <q-card style="width: 300px; max-width: 80vw;">
                <q-card-section>
                    <div class="text-h6">Adicionar um Cartão de Crédito</div>
                </q-card-section>
                <q-card-section>
                    <CreditCardForm />
                </q-card-section>
                <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup ></q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import CreditCardItem from './CreditCardItem'
import CreditCardForm from './CreditCardForm'

export default {
  name: 'CreditCardList',
  components: {
    CreditCardItem,
    CreditCardForm
  },
  data () {
    return {
      showAddCreditCardDialog: false,
      creditCards: [
        { id: '1', name: 'Person_1', brand: 'face', owner: 'blue' },
        { id: '2', name: 'Person_2', brand: 'child_care', owner: 'yellow' },
        { id: '3', name: 'Person_3', brand: 'pets', owner: 'green' }
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
