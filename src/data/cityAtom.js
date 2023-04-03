import { atom } from 'recoil'

const citiesState = atom({
	key: 'citiesState',
	default: [
		{ name: 'Karlstad', population: 98000, id: 1 },
		{ name: 'Kiruna', population: 22423, id: 2 },
		{ name: 'Göteborg', population: 600000, id: 3 }
	]
})

export { citiesState }
