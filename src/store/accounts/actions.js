import axios from 'axios'

export async function fetchAccounts ({ commit }) {
  const response = await axios.get('http://localhost:3000/accounts')
  commit('setAccounts', response.data)
}
