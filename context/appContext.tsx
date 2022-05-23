import React, { useContext, useState } from 'react'
import { TType } from 'components'

interface IProps {
  children: React.ReactNode
}

const useValues = () => {
  const [selectedService, setService] = useState<TType>('mobile')

  return {
    selectedService,
    setService,
  }
}

const AppContext = React.createContext({} as ReturnType<typeof useValues>)

export const useApp = () => {
  return useContext(AppContext)
}

export const AppContextProvider: React.FC<IProps> = ({ children }) => {
  return <AppContext.Provider value={useValues()}>{children}</AppContext.Provider>
}

export default AppContextProvider
