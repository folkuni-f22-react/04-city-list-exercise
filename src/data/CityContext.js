import { createContext } from 'react'

// The default data is used if you forget to provide a value when using the Provider
const defaultData = { cities: [], deleteCity: cityKey => { } }

export const CityContext = createContext(defaultData)
