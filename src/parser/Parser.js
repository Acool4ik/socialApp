import React, {useContext, useState} from 'react'  // libraries
import {Switch, Route, Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'

import {ThemeContext} from '../context/themeColor/themeContext' // contexts
import {FirebaseContext} from '../context/firebase/FirebaseContext'

import {LogoPresent} from './views/LogoPresent'  // local components
import {PasswordRequest} from './views/PasswordRequest'

import {defaultParserDate} from './staticDate'  // static 

const Parser = ({setParser}) => {
    const {styles} = useContext(ThemeContext)

    const {parser} = useContext(FirebaseContext)
    const {metaDateForParser, getName, updateDateForParser} = parser

    const [date, setDate] = useState(defaultParserDate)
    let history = useHistory()

    async function parserAsync() {
        const start = +Date.now()
        const objForSend = await metaDateForParser()
        const end = +Date.now()

        if((end - start) <= 1000) {
            objForSend.boolPath ? 
                setTimeout(() => passTrue(objForSend), (end - start + 125)) : 
                setTimeout(() => setParser(false), (end - start + 125))
        } else {
            objForSend.boolPath ? 
                passTrue(objForSend) :
                setParser(false)
        }

        function passTrue(objDate) {
            if(JSON.stringify(objDate) !== JSON.stringify(date)) {
                setDate(objDate)
            }
            history.push('/passrequest')
        }
    }

    parserAsync()

    return (
        <Switch>

            <Route exact path="/logopresent">
                <LogoPresent name={ getName() } styles={styles} />
            </Route> 

            {
                date.boolPath ?
                <Route path="/passrequest" >
                    <PasswordRequest styles={styles} 
                        isNew={date.isNewUser} 
                        PIN={date.passwordPIN} 
                        setParser={setParser} 
                        updateDate={updateDateForParser} 
                    />
                </Route> : null
            }
            
            <Redirect to="/logopresent" />
        </Switch>
    )
}

Parser.propTypes = {
    setParser: PropTypes.func.isRequired
}

export {Parser}