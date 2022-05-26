import React, { useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { TType } from 'components'

interface IProps {
  children: React.ReactNode
}

export type TDevice = 'desktop' | 'largeDesktop' | 'smallDesktop' | 'mobile'

const useValues = () => {
  const [selectedService, setService] = useState<TType>('mobile')

  const isBigScreen = useMediaQuery({ minWidth: 1624 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isSmallDesktopOrLaptop = useMediaQuery({
    maxWidth: 1633,
  })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

  // const isPortrait = useMediaQuery({ orientation: 'portrait' })
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })

  let device: TDevice = 'desktop'

  if (isBigScreen) device = 'largeDesktop'

  if (isDesktopOrLaptop) device = 'desktop'

  if (isSmallDesktopOrLaptop) device = 'smallDesktop'

  if (isTabletOrMobile) device = 'mobile'

  return {
    device,
    selectedService,
    setService,
  }
}

const AppContext = React.createContext({} as ReturnType<typeof useValues>)

export const useApp = () => {
  return useContext(AppContext)
}

export const AppContextProvider: React.FC<IProps> = ({ children }) => {
  return (
    <AppContext.Provider value={useValues()}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
