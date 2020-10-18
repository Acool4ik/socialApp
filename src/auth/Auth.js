import React, {useRef, useEffect, useContext, useState} from 'react' // libraries
import {Route, Switch, Redirect, useLocation} from 'react-router-dom'

import {defaultStateAlert, arrayOfRoutes} from './staticDate' // context and static
import {ThemeContext} from '../context/themeColor/themeContext' 

import {Navbar} from './views/Navbar'  // local components
import {Header} from './views/Header'
import {Form} from './views/Form'
import {Footer} from './views/Footer'

import {Spinner} from '../GeneralComponents/Spinner'  // general components
import {Alert} from '../GeneralComponents/Alert'

import {setNeededStyles} from './functions/setNeededStyles' // etitional functional

const Auth = () => {
    const {styles, setTheme} = useContext(ThemeContext)

    const [spinner, setSpinner] = useState(false)
    const [alert, setAlert] = useState(defaultStateAlert)

    let location = useLocation()

    const containerRef = useRef(null)
    const footerRef = useRef(null)

    useEffect(() => {    // toggle styles for cange content's size 
        setNeededStyles('footer-bottom', footerRef)  
        setNeededStyles('vh-100', containerRef)
    }, [location])

    const toggleSpinner = () => spinner ? <Spinner/> : null    // layout for return
    const toggleAlert = () => alert.state ? <Alert alert={alert} setAlert={setAlert} /> : null

    const createRoute = ({id, path, date}) => (
        <Route key={id} path={path}>
            <Form date={date} loading={setSpinner} alert={setAlert} styles={styles} />
        </Route>
    )

    return (
        <div className="d-flex flex-column" ref={containerRef} style={{...styles.main, ...styles.text}}>
            { toggleSpinner() }
            <Navbar setTheme={setTheme} styles={styles} />
            <div className="container">
                <Header/>
                { toggleAlert() }
                <Switch>
                    { arrayOfRoutes.map(elem => createRoute(elem)) }
                    <Redirect to="/signin" />
                </Switch>
            </div>
            <Footer ref={footerRef} styles={styles} />
        </div>
    )
}

export {Auth}