import {useContext} from 'react'

import {toggledUsers} from './toggledUsers'

import {ThemeContext} from './context/themeColor/themeContext'


function App() {  // element is toggled users from auth to parser
    const {auth} = useContext(ThemeContext)
    return toggledUsers(auth) 
}

export default App;
