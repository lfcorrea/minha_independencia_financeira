<template>
  <div>
    <div class="q-pa-md">
      <q-table
        title="Orçamento Familiar"
        :data="budget"
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
            <q-td key="meaning" :props="props" :class="props.row.class">
              {{ props.row.meaning}}
            </q-td>
            <q-td key="rank" :props="props" :class="props.row.class">
              {{ props.row.rank}}
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'YearlyBudget',
  data () {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        { name: 'category', label: 'Categoria', field: 'category', align: 'left' },
        { name: 'meaning', label: 'Significado', field: 'meaning' },
        { name: 'rank', label: 'Rank', field: 'rank' },
        { name: 'valueJan', label: 'Jan', field: 'valueJan' },
        { name: 'valueFeb', label: 'Fev', field: 'valueFeb' },
        { name: 'valueMar', label: 'Mar', field: 'valueMar' },
        { name: 'valueApr', label: 'Abr', field: 'valueApr' },
        { name: 'valueMay', label: 'Mai', field: 'valueMay' },
        { name: 'valueJun', label: 'Jun', field: 'valueJun' },
        { name: 'valueJul', label: 'Jul', field: 'valueJul' },
        { name: 'valueAug', label: 'Ago', field: 'valueAug' },
        { name: 'valueSep', label: 'Set', field: 'valueSep' },
        { name: 'valueOct', label: 'Out', field: 'valueOct' },
        { name: 'valueNov', label: 'Nov', field: 'valueNov' },
        { name: 'valueDec', label: 'Dec', field: 'valueDec' },
        { name: 'valueYear', label: 'Ano', field: 'valueYear' }
      ]
    }
  },
  methods: {
    ...mapActions(['fetchBudget'])
  },
  computed: {
    ...mapGetters(['budget'])
  },
  created () {
    this.fetchBudget()
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

  .highlight {
    background-color:gold;
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
