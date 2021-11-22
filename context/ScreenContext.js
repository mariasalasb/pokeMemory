import React, { createContext, useState } from 'react'

export const ScreenContext = createContext()

export const ScreenProvider = ({children}) => {
    const [screen,setScreen] = useState('main')

    const screenStart=()=>{
        return setScreen('start');
    }
    const screenMenu=()=>{
        return setScreen('menu');
    }

    return(
        <ScreenContext.Provider value={{screen,screenStart,screenMenu}}>
            {children}
        </ScreenContext.Provider>
    )
}

export default ScreenProvider