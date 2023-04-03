import { useState } from 'react'
import CityList from './components/CityList'
import './App.css'

/*
4a Skapa en lista med objekt som representerar städer. Objekten ska ha namn och antal invånare. Gör en komponent som tar emot listan med props och renderar den som ett <ul> element.

4b Dela upp komponenten i två, genom att skapa en komponent som kan rendera ett <li> element. (Till exempel CityList och CityItem.)

4c* Lägg till att användare kan ta bort befintliga element i listan, genom att klicka på en <button>. Knappen ska finnas direkt på varje element.

4d** Gör det möjligt att ändra befintliga element. När man klickar på ett element, ska det bytas ut mot ett textfält, som man kan skriva i för att ändra värdet.
*/

const data = [
	{ name: 'Karlstad', population: 98000, id: 1 },
	{ name: 'Kiruna', population: 22423, id: 2 },
	{ name: 'Göteborg', population: 600000, id: 3 }
]

function App() {
	const [cities, setCities] = useState(data)

	const deleteCity = (cityId) => {
		let newCities = cities.filter(city => city.id !== cityId)
		setCities(newCities)
	}

	return (
		<div className="App">
			<h1> City list </h1>
			<CityList cities={cities} deleteCity={deleteCity} />
		</div>
	)
}


// Använd state-variabler när: komponenten behöver "komma ihåg" något
// Använd vanliga variabler när: vi behöver en lokal variabel, men den ska inte sparas till nästa rendering
const Counter = () => {
	// count måste sparas mellan renderingen
	const [count, setCount] = useState(0)
	// display räknas ut från state, när vi behöver den
	let display = `Du har klickat ${count} gånger.`

	return (
		<div>
			<p> {display} </p>
			<button onClick={() => setCount(c => c + 1)}> Klicka </button>
		</div>
	)
}

export default App
