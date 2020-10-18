import React, {useContext, useEffect, useRef, useState} from 'react'   // libraries
import {Switch, Route, Redirect} from 'react-router-dom'

import {FirebaseContext} from '../context/firebase/FirebaseContext' // contexts
import {ThemeContext} from '../context/themeColor/themeContext'

import {Alert} from '../GeneralComponents/Alert'  // general components
import {Spinner} from '../GeneralComponents/Spinner'
import {Modal} from '../GeneralComponents/Modal'

import {dateAlert, dateModal, dateForAlert, dateForModal} from './static'  // static

import {Navbar} from './views/navbar/Navbar' // local elements
import {Home} from './views/home_page/Home'  
import {Friends} from './views/friends_page.js/Friends'
import {Messages} from './views/messages_page/Messages'
import {Newsline} from './views/newsline_page/Newsline'
import {Footer} from './views/footer/Footer'
// import {Sidebar} from './views/sidebar/Sidebar'
import {Gallery} from './generalComponents/Gallery'

import {setNeededStyles} from './functions/setNeededStyles'  // aditional functional

const Autentificated = () => {
    const {main} = useContext(FirebaseContext)
    const {setOnlineStatus} = main

    const {styles, setTheme} = useContext(ThemeContext)

    const [spinner, setSpinner] = useState(false)
    const [alert, setAlert] = useState(dateAlert)
    const [modal, setModal] = useState(dateModal)
   
    const [sidebar, setSidebar] = useState(true)

    
    useEffect(() => {
        setOnlineStatus(true)
    }, [setOnlineStatus])

    const myUid = "mypage76347364723"

    const toggleSpinner = () => spinner ? <Spinner banTouch={false} /> : null
    const toggleAlert = () => alert.status ? <Alert {...alert} setAlert={setAlert} /> : null
    const toggleModal = () => modal.status ? <Modal {...modal} setModal={setModal} styles={styles} /> : null
    
    return (
        <div style={{...styles.main, ...styles.text}} className="vh-100 overflow-hidden">
            <Navbar styles={styles} theme={setTheme} sidebar={setSidebar} modal={setModal} spinner={setSpinner} />
            <div className="container scrollbar-decoration smart-height position-relative" >
            {/* style={{height: `${window.screen.height - 230}px`}}  */}
                { toggleSpinner() }
                { toggleAlert() }
                { toggleModal() }
                {/* <Sidebar sidebar={sidebar} /> */}

                <Switch>

                <Route path={`/home/${myUid}`} >
                    <Home styles={styles} myUid={myUid} />
                </Route>

                <Route path={`/gallery/${myUid}`} >
                    <Gallery />
                </Route>
                <Route path={`/friends/${myUid}`} >
                    <Friends styles={styles} spinner={setSpinner} />
                </Route>

                <Route path="/messages" >
                    <Messages styles={styles} alert={setAlert} spinner={setSpinner} modal={setModal} />
                </Route>
                <Route path="/newsline" >
                    <Newsline />
                </Route>

                </Switch> 

                <Redirect to={`/home/${myUid}`}  />
            </div>

            <Footer myUid={myUid} styles={styles} />

        </div>
        
    )
}

export {Autentificated}