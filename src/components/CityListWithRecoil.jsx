import { useRecoilState } from 'recoil'
import { citiesState } from '../data/cityAtom.js'

const CityListWithRecoil = () => {
	const [cities] = useRecoilState(citiesState)
	return (
		<ul>
			{cities.map(city => (
				<CityItemWithRecoil key={city.id} cityId={city.id} />
			))}
		</ul>
	)
}


const CityItemWithRecoil = ({ cityId }) => {
	const [cities, setCities] = useRecoilState(citiesState)

	const city = cities.find(c => c.id === cityId)

	const deleteCity = cityId => {
		let newCities = cities.filter(city => city.id !== cityId)
		setCities(newCities)
	}

	return (
		<li> {city.name} har {city.population} invånare.
			<button onClick={() => deleteCity(city.id)}> Ta bort </button>
		</li>
	)
}

export default CityListWithRecoil
