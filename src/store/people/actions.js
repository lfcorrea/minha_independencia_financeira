import axios from 'axios'

export async function fetchPeople ({ commit }) {
  const response = await axios.get('http://localhost:3000/people')
  commit('setPeople', response.data)
}
