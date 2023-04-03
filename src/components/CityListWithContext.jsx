import { useContext } from 'react'
import { CityContext } from '../data/CityContext.js'

const CityListWithContext = () => {
	const { cities } = useContext(CityContext)
	return (
		<ul>
			{cities.map(city => (
				<CityItemWithContext key={city.id} cityId={city.id} />
			))}
		</ul>
	)
}


const CityItemWithContext = ({ cityId }) => {
	const { cities, deleteCity } = useContext(CityContext)

	const city = cities.find(c => c.id === cityId)

	return (
		<li> {city.name} har {city.population} invånare.
			<button onClick={() => deleteCity(city.id)}> Ta bort </button>
		</li>
	)
}

export default CityListWithContext
