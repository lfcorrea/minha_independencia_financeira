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
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
          id: 10,
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
          id: 11,
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
          id: 12,
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
</style>
