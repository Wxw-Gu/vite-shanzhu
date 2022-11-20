import { createContext } from 'react'

interface AppContextInterface {
  name: string
  age: number
  url: string
  dispatch: ({ type: string, name: any }) => void
}

export const homeContext = createContext<AppContextInterface | null>(null)
