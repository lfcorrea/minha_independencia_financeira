
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'financialIndependence', component: () => import('pages/financialIndependence/FinancialIndependence.vue') },
      { path: 'investiments', component: () => import('pages/investiments/Investiments.vue') },
      { path: 'incomes', component: () => import('pages/incomes/Incomes.vue') },
      { path: 'outcomes', component: () => import('pages/outcomes/Outcomes.vue') },
      { path: 'stocksRadar', component: () => import('pages/stocksRadar/StocksRadar.vue') },
      { path: 'configs/accounts', component: () => import('pages/configs/Accounts.vue') },
      { path: 'configs/creditCards', component: () => import('pages/configs/CreditCards.vue') },
      { path: 'configs/people', component: () => import('pages/configs/People.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
