

const CityList = ({ cities }) => (
	<ul>
		{cities.map(city => (
			<CityItem key={city.id} city={city} />
		))}
	</ul>
)


const CityItem = ({ city }) => (
	<li> {city.name} har {city.population} invånare </li>
)

export default CityList
