import axios from 'axios'

const RICK_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async (set) => {
	try {
		const res = await axios.get(`${RICK_URL}/characters`)
		return set(res.data)
	} catch (error) {
		return new Error('Ups! something was wrong!!')
	}
}
