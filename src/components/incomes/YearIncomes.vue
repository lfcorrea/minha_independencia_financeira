<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Receitas do Ano"
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
            <q-td key="category" :props="props" :class="props.row.class">
              {{ props.row.category}}
            </q-td>
            <q-td key="valueJan" :props="props">
              {{props.row.valueJan}}
            </q-td>
            <q-td key="valueFeb" :props="props">
              {{props.row.valueFeb}}
            </q-td>
            <q-td key="valueMar" :props="props">
              {{props.row.valueMar}}
            </q-td>
            <q-td key="valueApr" :props="props">
              {{props.row.valueApr}}
            </q-td>
            <q-td key="valueMay" :props="props">
              {{props.row.valueMay}}
            </q-td>
            <q-td key="valueJun" :props="props">
              {{props.row.valueJun}}
            </q-td>
            <q-td key="valueJul" :props="props">
              {{props.row.valueJul}}
            </q-td>
            <q-td key="valueAug" :props="props">
              {{props.row.valueAug}}
            </q-td>
            <q-td key="valueSep" :props="props">
              {{props.row.valueSep}}
            </q-td>
            <q-td key="valueOct" :props="props">
              {{props.row.valueOct}}
            </q-td>
            <q-td key="valueNov" :props="props">
              {{props.row.valueNov}}
            </q-td>
            <q-td key="valueDec" :props="props">
              {{props.row.valueDec}}
            </q-td>
            <q-td key="valueYear" :props="props">
              {{props.row.valueYear}}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearIncomes',
  data () {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        { name: 'category', label: 'Categoria', field: 'category', align: 'left' },
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
        { name: 'valueYear', label: 'Ano', field: 'valueYear', sortable: true }
      ],
      data: [
        {
          id: '8899afa5-8f60-41d3-9414-8d5a6f16371f',
          category: 'RENDA FAMILIAR TOTAL',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-0',
          rowClass: 'group'
        },
        {
          id: 'a1a1ec35-0938-4eec-aade-6cae713be628',
          category: 'Receitas Fixas',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-1',
          rowClass: 'section'
        },
        {
          id: '0e0d6df3-39c7-48bc-87cb-7df79bbd90d9',
          category: 'Salário Nando',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: '2abc6433-b3aa-4011-8fb8-d80cf3e6c4b1',
          category: 'Salário Sheila',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: '61a94cdf-39a5-47d4-ba9b-50f128a6ddb5',
          category: 'Aluguéis',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: 'edc0bd33-9c01-472f-9c87-4b72996b457f',
          category: 'Receitas Variáveis',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-1',
          rowClass: 'section'
        },
        {
          id: '52b6cc62-c197-4716-8159-9e47495d074a',
          category: 'Tributadas',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-2',
          rowClass: 'sub-section'
        },
        {
          id: 'd903a43c-24ad-4120-a6cd-38bb09fa4956',
          category: 'Notas Fiscais Emitidas',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-3 level-category',
          rowClass: 'category'
        },
        {
          id: '93acc716-b1fb-41c0-a0f0-288d487e3fd6',
          category: 'Não Tributadas',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-2',
          rowClass: 'sub-section'
        },
        {
          id: 'e978125a-d937-4196-9b7b-0bae68b35953',
          category: '13. Salário Líquido',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-3 level-category',
          rowClass: 'category'
        },
        {
          id: 'bfda2dcb-f96f-43c7-ba48-477eb0230c3a',
          category: 'Férias',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-3 level-category',
          rowClass: 'category'
        },
        {
          id: '1bafba8b-c5a1-4df1-b4c0-a01283cdddd6',
          category: 'Bônus e Extras',
          valueJan: '1.000,00',
          valueFeb: '1.000,00',
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
          valueYear: '1.000,00',
          class: 'level-3 level-category',
          rowClass: 'category'
        }
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
  .level-category {
    text-align: right;
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

  .my-sticky-virtscroll-table {
    /* max height is important */
    /* this will be the loading indicator */
  }
  .my-sticky-virtscroll-table .q-table__middle {
    max-height: 200px;
  }
  .my-sticky-virtscroll-table .q-table__top,
  .my-sticky-virtscroll-table .q-table__bottom,
  .my-sticky-virtscroll-table thead tr:first-child th {
    background-color: #fff;
  }
  .my-sticky-virtscroll-table thead tr th {
    position: sticky;
    z-index: 1;
  }
  .my-sticky-virtscroll-table thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px;
  }
  .my-sticky-virtscroll-table thead tr:first-child th {
    top: 0;
  }

</style>
