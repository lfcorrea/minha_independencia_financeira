import axios from 'axios'

export async function fetchBudget ({ commit }) {
  const response = await axios.get('http://localhost:3000/budget')
  commit('setBudget', response.data)
}
