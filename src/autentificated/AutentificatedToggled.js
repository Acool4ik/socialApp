import React, {useState} from 'react' // just react

import {Parser} from '../parser/Parser' // global elements
import {Autentificated} from './Autentificated'


const AutentificatedToggled = () => {  // toggled element from parser to Autentificated
    const [parser, setParser] = useState(true)
    return parser ? <Parser setParser={setParser} /> : <Autentificated />
}

export {AutentificatedToggled}