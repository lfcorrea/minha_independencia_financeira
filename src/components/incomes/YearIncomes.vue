<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Receitas do Ano"
        :data="data"
        :columns="columns"
        row-Key="id"
      >
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearIncomes',
  data () {
    return {
      columns: [
        { name: 'category', label: 'Categoria', field: 'category', sortable: true, align: 'left' },
        { name: 'valueJan', label: 'Jan', field: 'valueJan', sortable: true },
        { name: 'valueFeb', label: 'Fev', field: 'valueFeb', sortable: true },
        { name: 'valueMar', label: 'Mar', field: 'valueMar', sortable: true },
        { name: 'valueApr', label: 'Abr', field: 'valueApr', sortable: true },
        { name: 'valueMay', label: 'Mai', field: 'valueMay', sortable: true },
        { name: 'valueJun', label: 'Jun', field: 'valueJun', sortable: true },
        { name: 'valueJul', label: 'Jul', field: 'valueJul', sortable: true },
        { name: 'valueAug', label: 'Ago', field: 'valueAug', sortable: true },
        { name: 'valueSep', label: 'Set', field: 'valueSep', sortable: true },
        { name: 'valueOct', label: 'Out', field: 'valueOct', sortable: true },
        { name: 'valueNov', label: 'Nov', field: 'valueNov', sortable: true },
        { name: 'valueDec', label: 'Dec', field: 'valueDec', sortable: true },
        { name: 'valueYear', label: '2020', field: 'valueYear', sortable: true }
      ],
      data: [
        {
          id: 1,
          category: 'Salário LF',
          valueJan: '1.000,00',
          valueFev: '1.000,00',
          valueMar: '1.000,00',
          valueApr: '1.000,00',
          valueMay: '1.000,00',
          valueJun: '1.000,00',
          valueJul: '1.000,00',
          valueAug: '1.000,00',
          valueSep: '1.000,00',
          valueOct: '1.000,00',
          valueNov: '1.000,00',
          valueDec: '1.000,00',
          valueYear: '1.000,00'
        },
        {
          id: 2,
          category: 'Salário Sheila',
          valueJan: '1.000,00',
          valueFev: '1.000,00',
          valueMar: '1.000,00',
          valueApr: '1.000,00',
          valueMay: '1.000,00',
          valueJun: '1.000,00',
          valueJul: '1.000,00',
          valueAug: '1.000,00',
          valueSep: '1.000,00',
          valueOct: '1.000,00',
          valueNov: '1.000,00',
          valueDec: '1.000,00',
          valueYear: '1.000,00'
        },
        {
          id: 3,
          category: 'Salário LF - Aula',
          valueJan: '1.000,00',
          valueFev: '1.000,00',
          valueMar: '1.000,00',
          valueApr: '1.000,00',
          valueMay: '1.000,00',
          valueJun: '1.000,00',
          valueJul: '1.000,00',
          valueAug: '1.000,00',
          valueSep: '1.000,00',
          valueOct: '1.000,00',
          valueNov: '1.000,00',
          valueDec: '1.000,00',
          valueYear: '1.000,00'
        },
        {
          id: 4,
          category: 'Salário LF - Freela',
          valueJan: '1.000,00',
          valueFev: '1.000,00',
          valueMar: '1.000,00',
          valueApr: '1.000,00',
          valueMay: '1.000,00',
          valueJun: '1.000,00',
          valueJul: '1.000,00',
          valueAug: '1.000,00',
          valueSep: '1.000,00',
          valueOct: '1.000,00',
          valueNov: '1.000,00',
          valueDec: '1.000,00',
          valueYear: '1.000,00'
        }
      ]
    }
  }
}
</script>

<style>

</style>
