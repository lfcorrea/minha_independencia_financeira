<template>
    <q-expansion-item
          expand-separator
          icon="money_off"
          label="Despesas"
        >
          <q-card>
            <q-card-section>
              <q-icon name="trending_down" >
                <q-tooltip>Some tooltip</q-tooltip>
              </q-icon>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
              <q-btn to="/outcomes" label="Detalhes"></q-btn>
            </q-card-section>
          </q-card>
        </q-expansion-item>
</template>

<script>
export default {
  name: 'Outcomes'
}
</script>

<style scoped>

</style>
