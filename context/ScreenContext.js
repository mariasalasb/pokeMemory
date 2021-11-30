import React, { createContext, useState } from 'react'

export const ScreenContext = createContext()

export const ScreenProvider = ({children}) => {
    const [screen,setScreen] = useState('cover')

    const screenRandomPick=()=>{
        return setScreen('randomPick');
    }
    const screenMenu=()=>{
        return setScreen('menu');
    }

    return(
        <ScreenContext.Provider value={{screen,screenRandomPick,screenMenu}}>
            {children}
        </ScreenContext.Provider>
    )
}

export default ScreenProvider