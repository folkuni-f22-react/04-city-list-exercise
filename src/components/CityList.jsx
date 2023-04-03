

const CityList = ({ cities, deleteCity }) => (
	<ul>
		{cities.map(city => (
			<CityItem key={city.id} city={city} deleteCity={deleteCity} />
		))}
	</ul>
)


const CityItem = ({ city, deleteCity }) => (
	<li> {city.name} har {city.population} invånare.
		<button onClick={() => deleteCity(city.id)}> Ta bort </button>
	</li>
)

export default CityList
