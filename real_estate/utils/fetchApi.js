import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'ae5c8a4bf1msha6fa0da127be674p1c54f9jsn28fe7ae34dac',
    },
  })
  return data
}
