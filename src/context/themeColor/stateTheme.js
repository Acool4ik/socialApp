import React, {useState} from 'react'
import {ThemeContext} from './themeContext'

export const StateTheme = ({children}) => {
    const [theme, setTheme] = useState(true)
    const [auth, setAuth] = useState(false)  // controled only firebase state!!! 
                                             // other element should not receive this state!!!
                                             // dont't do it man!!!

    const dark = {
        text: { color: '#fff' },
        back: { backgroundColor: '#fff' },
        main: { backgroundColor: '#000' }
    }

    const white = { 
        text: { color: '#000'}, 
        back: { backgroundColor: '#000' },
        main: { backgroundColor: '#fff' }
    }

    const styles = theme ? dark : white

    return (
        <ThemeContext.Provider value={{styles, setTheme, auth, setAuth}} >
            {children}
        </ThemeContext.Provider>
    )
}