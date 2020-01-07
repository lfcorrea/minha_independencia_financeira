<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Receitas do Mês"
        :data="data"
        :columns="columns"
        row-Key="name"
        hide-bottom
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="categoria" :props="props" :class="props.row.class">
            {{ props.row.category}}
          </q-td>
          <q-td key="valor" :props="props">
            {{props.row.value}}
          </q-td>
        </q-tr>
      </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthIncomes',
  data () {
    return {
      columns: [
        { name: 'categoria', label: 'Categoria', field: 'category', sortable: true, align: 'left' },
        { name: 'valor', label: 'R$', field: 'value', sortable: true }
      ],
      data: [
        { id: 1, category: 'Salário LF', value: '1.000,00', class: 'level-0' },
        { id: 2, category: 'Salário Sheila', value: '1.500,00', class: 'level-1' },
        { id: 3, category: 'Salário LF - Aula', value: '1.020,00', class: 'level-2' },
        { id: 4, category: 'Salário LF - Freela', value: '1.030,00', class: 'level-3' },
        { id: 5, category: 'Salário LF - Freela - 1', value: '1.031,00', class: 'level-0' },
        { id: 6, category: 'Salário LF - Freela - 2', value: '1.032,00', class: 'level-1' },
        { id: 7, category: 'Salário LF - Freela - 3', value: '1.033,00', class: 'level-2' },
        { id: 8, category: 'Salário LF - Freela - 4', value: '1.034,00', class: 'level-1' }
      ]
    }
  }
}
</script>

<style>
  .level-0 {
    padding-left: 16px!important;
  }
  .level-1 {
    padding-left: 30px!important;
  }
  .level-2 {
    padding-left: 60px!important;
  }
  .level-3 {
    padding-left: 90px!important;
  }
</style>
