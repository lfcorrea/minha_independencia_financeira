<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Investimentos do Ano"
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
  name: 'YearInvestiments',
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
          id: '3dcc3886-9076-41fd-ac35-bceb3b9ce8d6',
          category: 'Saldo Disponível no Mês',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: '788785ed-4e84-48ec-b3b7-aa6996e5ae3c',
          category: 'Sobra do Mês Anterior (Saldo em Conta)',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: 'b917536e-e759-4b24-a3e3-e47a9d5a0b44',
          category: 'Fluxo de Caixa Livre para Aplicar',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: 'aabb2c96-29ed-4ce4-bbea-023df8db3337',
          category: 'Aplicação Total no Mês',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: '0451330f-eb33-4dfa-9119-ca99a6c58fd1',
          category: 'Aplicações Feitas Dentro do Mês',
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
          rowClass: 'group'
        },
        {
          id: '77466215-052d-45eb-ba15-e7f828dd562b',
          category: 'Investimento A',
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
          id: 'b0b00216-a515-4cfe-8325-0c67da9549d0',
          category: 'Investimento B',
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
          id: '6561c5ad-822e-4396-b9ab-dc53511330dd',
          category: 'Investimento C',
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
          id: '26855209-f6c0-4455-b529-b3baf2500456',
          category: 'Investimento D',
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
          id: 'e27c4726-6351-476d-b4d9-37578b286f46',
          category: 'Fluxo de Caixa Líquido',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: 'abf8de9b-3a26-4b8a-b30d-e1285ee64908',
          category: 'Saldo Total Investimentos',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: '00a650fb-88c1-4b7e-bf28-176c071e80f1',
          category: 'Saldos dos Investimentos',
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
          id: '6aa3f483-b29d-4a26-b33c-d96b34603af3',
          category: 'Investimento A',
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
          id: 'e7a5627d-6899-40f1-ae5b-b42ccc086005',
          category: 'Investimento B',
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
          id: '13b6a57c-afd6-4522-ba3c-8e812a45440e',
          category: 'Investimento C',
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
          id: '0065c3ed-d3af-4056-9f33-6d35151b259c',
          category: 'Investimento D',
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
          id: 'f5a00b87-706f-435a-9f5c-7f60a433eaf6',
          category: 'Renda dos Investimentos',
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
          rowClass: 'highlight-investiments'
        },
        {
          id: '03190784-054c-4103-af26-06ed39a27189',
          category: 'Grau de Independência Financeira',
          valueJan: '0%',
          valueFeb: '0%',
          valueMar: '0%',
          valueApr: '0%',
          valueMay: '0%',
          valueJun: '0%',
          valueJul: '0%',
          valueAug: '0%',
          valueSep: '0%',
          valueOct: '0%',
          valueNov: '0%',
          valueDec: '0%',
          valueYear: '0%',
          class: 'level-0',
          rowClass: 'highlight-independence'
        },
        {
          id: '79273522-ecf5-4f42-9663-dd2a1f14fcd7',
          category: 'Rentabilidade Mensal Aplicação',
          valueJan: '',
          valueFeb: '',
          valueMar: '',
          valueApr: '',
          valueMay: '',
          valueJun: '',
          valueJul: '',
          valueAug: '',
          valueSep: '',
          valueOct: '',
          valueNov: '',
          valueDec: '',
          valueYear: '',
          class: 'level-0',
          rowClass: 'group'
        },
        {
          id: 'f5a5519d-2faa-45cc-95de-729467c131a6',
          category: 'Investimento A',
          valueJan: '0%',
          valueFeb: '0%',
          valueMar: '0%',
          valueApr: '0%',
          valueMay: '0%',
          valueJun: '0%',
          valueJul: '0%',
          valueAug: '0%',
          valueSep: '0%',
          valueOct: '0%',
          valueNov: '0%',
          valueDec: '0%',
          valueYear: '0%',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: '8d857ece-891c-4147-9753-eb1e6b7c915f',
          category: 'Investimento B',
          valueJan: '0%',
          valueFeb: '0%',
          valueMar: '0%',
          valueApr: '0%',
          valueMay: '0%',
          valueJun: '0%',
          valueJul: '0%',
          valueAug: '0%',
          valueSep: '0%',
          valueOct: '0%',
          valueNov: '0%',
          valueDec: '0%',
          valueYear: '0%',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: '0bf56d21-124f-4ecb-b94a-da9bb7d2f521',
          category: 'Investimento C',
          valueJan: '0%',
          valueFeb: '0%',
          valueMar: '0%',
          valueApr: '0%',
          valueMay: '0%',
          valueJun: '0%',
          valueJul: '0%',
          valueAug: '0%',
          valueSep: '0%',
          valueOct: '0%',
          valueNov: '0%',
          valueDec: '0%',
          valueYear: '0%',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: '3c02fbcc-4aa6-4e7c-8c12-045849493ab4',
          category: 'Investimento D',
          valueJan: '0%',
          valueFeb: '0%',
          valueMar: '0%',
          valueApr: '0%',
          valueMay: '0%',
          valueJun: '0%',
          valueJul: '0%',
          valueAug: '0%',
          valueSep: '0%',
          valueOct: '0%',
          valueNov: '0%',
          valueDec: '0%',
          valueYear: '0%',
          class: 'level-2 level-category',
          rowClass: 'category'
        },
        {
          id: '9c48df79-8108-4ad8-8c09-a85ece0368e6',
          category: 'Renda Média dos Investimentos',
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
          rowClass: 'highlight-investiments'
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

  .highlight-investiments {
    background-color:darkgreen;
    color: aliceblue;
    font-weight: 800;
  }

  .highlight-independence {
    background-color:darkorange;
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
