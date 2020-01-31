<template>
    <div>
        <q-list bordered separator>
            <CreditCardItem v-for="creditCard of allCreditCards"
                :key="creditCard.id"
                v-bind:id="creditCard.id"
                v-bind:name="creditCard.description"
                v-bind:brandId="creditCard.brandId"
                v-bind:ownerId="creditCard.ownerId"
                v-bind:closingDay="creditCard.closingDay"
                v-bind:payDay="creditCard.closingDay"
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
import { mapGetters, mapActions } from 'vuex'
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
      showAddCreditCardDialog: false
    }
  },
  methods: {
    ...mapActions(['fetchCreditCards']),
    onAddPersonClick () {
      alert('Click')
    }
  },
  computed: {
    ...mapGetters(['allCreditCards'])
  },
  created () {
    this.fetchCreditCards()
  }
}
</script>
