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
            <q-td key="description" :props="props" :class="props.row.class">
              {{ props.row.description}}
            </q-td>
            <q-td key="meaning" :props="props" :class="props.row.class">
              {{ props.row.meaning}}
            </q-td>
            <q-td key="rank" :props="props" :class="props.row.class">
              {{ props.row.rank}}
            </q-td>
            <q-td key="january" :props="props">
              {{props.row.january}}
            </q-td>
            <q-td key="february" :props="props">
              {{props.row.february}}
            </q-td>
            <q-td key="march" :props="props">
              {{props.row.march}}
            </q-td>
            <q-td key="april" :props="props">
              {{props.row.april}}
            </q-td>
            <q-td key="may" :props="props">
              {{props.row.may}}
            </q-td>
            <q-td key="june" :props="props">
              {{props.row.june}}
            </q-td>
            <q-td key="july" :props="props">
              {{props.row.july}}
            </q-td>
            <q-td key="august" :props="props">
              {{props.row.august}}
            </q-td>
            <q-td key="september" :props="props">
              {{props.row.september}}
            </q-td>
            <q-td key="october" :props="props">
              {{props.row.october}}
            </q-td>
            <q-td key="november" :props="props">
              {{props.row.november}}
            </q-td>
            <q-td key="december" :props="props">
              {{props.row.december}}
            </q-td>
            <q-td key="year" :props="props">
              {{props.row.year}}
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
        { name: 'description', label: 'Categoria', field: 'description', align: 'left' },
        { name: 'meaning', label: 'Significado', field: 'meaning' },
        { name: 'rank', label: 'Rank', field: 'rank' },
        { name: 'january', label: 'Jan', field: 'january' },
        { name: 'february', label: 'Fev', field: 'february' },
        { name: 'march', label: 'Mar', field: 'march' },
        { name: 'april', label: 'Abr', field: 'april' },
        { name: 'may', label: 'Mai', field: 'may' },
        { name: 'june', label: 'Jun', field: 'june' },
        { name: 'july', label: 'Jul', field: 'july' },
        { name: 'august', label: 'Ago', field: 'august' },
        { name: 'september', label: 'Set', field: 'september' },
        { name: 'october', label: 'Out', field: 'october' },
        { name: 'november', label: 'Nov', field: 'november' },
        { name: 'december', label: 'Dec', field: 'december' },
        { name: 'year', label: 'Ano', field: 'year' }
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
