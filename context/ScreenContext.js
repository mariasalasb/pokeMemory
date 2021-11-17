import { createContext, useState } from 'react'

export const ScreenContext = createContext()

export const ScreenProvider = ({children}) => {
    //const [screen,setScreen] = useState('main')

    const changeScreen=()=>{
        return setScreen('start');

    }

    
    return(
        <ScreenContext.Provider value={{changeScreen}}>
            {children}
        </ScreenContext.Provider>
    )
}

export default ScreenProvider