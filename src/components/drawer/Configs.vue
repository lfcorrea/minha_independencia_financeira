<template>
  <div>
    <q-expansion-item
      expand-separator
      icon="settings_applications"
      label="Configurações"
    >
      <q-card>
        <q-card-section>
          <div id="q-app" style="max-width: 100%">
            <div class="q-pa-md q-gutter-md">

              <q-list bordered separator>
                <q-item to="/configs/accounts" clickable v-ripple :active="active">
                  <q-item-section avatar>
                    <q-icon name="account_balance"></q-icon>
                  </q-item-section>
                  <q-item-section>Contas</q-item-section>
                </q-item>

                <q-item to="/configs/creditCards" clickable v-ripple :active="active">
                  <q-item-section avatar>
                    <q-icon name="credit_card"></q-icon>
                  </q-item-section>
                  <q-item-section>Cartões</q-item-section>
                </q-item>

                <q-item to="/configs/people" clickable v-ripple :active="active">
                  <q-item-section avatar>
                    <q-icon name="people"></q-icon>
                  </q-item-section>
                  <q-item-section>Pessoas</q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: 'Configs'
}
</script>

<style scoped>
</style>
