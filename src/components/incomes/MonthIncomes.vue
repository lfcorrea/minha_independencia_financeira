<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Receitas do Mês"
        :data="data"
        :columns="columns"
        row-Key="name"
        hide-bottom
        class="my-sticky-virtscroll-table"
        virtual-scroll
        table-style="max-height: 700px"
        :pagination.sync="pagination"
        :rows-per-page-options="[0]"
        :virtual-scroll-sticky-size-start="48"
      >
      <template v-slot:body="props">
        <q-tr :props="props" :class="props.row.rowClass">
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
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        { name: 'categoria', label: 'Categoria', field: 'category', sortable: true, align: 'left' },
        { name: 'valor', label: 'R$', field: 'value', sortable: true }
      ],
      data: [
        { id: 1, category: 'RENDA FAMILIAR TOTAL', value: '1.000,00', class: 'level-0', rowClass: 'group' },
        { id: 2, category: 'Receitas Fixas', value: '1.500,00', class: 'level-1', rowClass: 'section' },
        { id: 3, category: 'Salário Nando', value: '1.020,00', class: 'level-2', rowClass: 'category' },
        { id: 4, category: 'Salário Sheila', value: '1.030,00', class: 'level-2', rowClass: 'category' },
        { id: 5, category: 'Aluguéis', value: '1.031,00', class: 'level-2', rowClass: 'category' },
        { id: 6, category: 'Receitas Variáveis', value: '1.032,00', class: 'level-1', rowClass: 'section' },
        { id: 7, category: 'Tributadas', value: '1.033,00', class: 'level-2', rowClass: 'sub-section' },
        { id: 8, category: 'Notas Fiscais Emitidas', value: '1.034,00', class: 'level-2', rowClass: 'category' },
        { id: 9, category: 'Não Tributadas', value: '1.033,00', class: 'level-1', rowClass: 'sub-section' },
        { id: 10, category: '13. Salário Líquido', value: '1.034,00', class: 'level-2', rowClass: 'category' },
        { id: 11, category: 'Férias', value: '1.034,00', class: 'level-2', rowClass: 'category' },
        { id: 12, category: 'Bônus e extras', value: '1.034,00', class: 'level-2', rowClass: 'category' }
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
  .group {
    background-color: black;
    color: aliceblue;
    font-weight: 800;
  }

  .section {
    background-color: gray;
  }
  .sub-section {
    background-color: lightgray;
  }
  .category {
    background-color: white;
  }
</style>
