import axios from 'axios'

export async function fetchCreditCards ({ commit }) {
  const response = await axios.get('http://localhost:3000/creditCards')
  commit('setCreditCards', response.data)
}
