import React from 'react'   // libraries
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './root.css'  // total styles
import App from './App'

import {FirebaseState} from './context/firebase/FirebaseState'  // adding context firebase and theme
import {StateTheme} from './context/themeColor/stateTheme'


ReactDOM.render(
    <BrowserRouter>
        <StateTheme>
            <FirebaseState>
                <App />
            </FirebaseState>
        </StateTheme>    
    </BrowserRouter>
, document.getElementById('root'));


