import React, { Children, useMemo, useState } from 'react'
import { getCharacters } from '../services/api/queries'

export default function Characters() {
	const [characters, setCharacters] = useState()
	useMemo(() => {
		getCharacters(setCharacters)
	}, [])

	const avatars = characters?.results?.map((avatar) => <h1>{avatar.name}</h1>)

	return (
		<React.Fragment>
			{Children.toArray(
				avatars || [<h1>fetching data, wait a moment please...</h1>]
			)}
		</React.Fragment>
	)
}
