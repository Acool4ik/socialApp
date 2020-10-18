import React, {useContext, useMemo} from 'react'

import {firebaseConfig, AlertMessage } from '../type'  // static date

import {FirebaseContext} from './FirebaseContext'  // context and npm firebase package
import * as Firebase from 'firebase'

import {ThemeContext} from '../themeColor/themeContext'  // (contains state for toggle auth/autentificated)


export const FirebaseState = ({children}) => {
    const {setAuth} = useContext(ThemeContext)

    const app = useMemo(() => Firebase.initializeApp(firebaseConfig), [])
    const database = useMemo(() => app.database(), [app])

    
    async function createAccount(email, password, name, setLoading, setAlert) {
        setLoading(true)

        async function searchByName(name = '') {
            const snapshot = await database.ref('/search/').once('value')
            Object.keys(await snapshot.val()).forEach(nameMap => {
                if(nameMap === name) {
                    throw new Error('This name already have been created :(')
                }
            })
        } 

        async function firstPushUser(userId, username, email) {
            await database.ref(`/users/${userId}`).set({
                username, profile_picture : '', smile: '', status: '', online: false
            })

            await database.ref(`/privat/${userId}`).set({
                email, passwordPIN: false, newUser: true
            })

            await database.ref(`/search/${username}`).set(userId);
        }

        try {
            await searchByName(name)
            await app.auth().createUserWithEmailAndPassword(email, password)
            const currentUser = app.auth().currentUser 
            await currentUser.updateProfile({ displayName: name })
            await firstPushUser(currentUser.uid, name, email)

            app.auth().onAuthStateChanged(user => user ? setAuth(true) : setAuth(false))
        } catch({message}) {
            setAlert(AlertMessage(message))
        }

        setLoading(false)
    }

    async function comeInAccount(email, password, setLoading, setAlert) {
        setLoading(true)
        
        try {
            await app.auth().signInWithEmailAndPassword(email, password)
            app.auth().onAuthStateChanged(user => user ? setAuth(true) : setAuth(false))
        } catch({message}) {
            setAlert(AlertMessage(message))
        }

        setLoading(false)
    }

    async function restorePassword(email, setLoading, setAlert) {
        setLoading(true)

        try {
            await app.auth().sendPasswordResetEmail(email)
            setAlert(AlertMessage('Letter have been sended', true))
        } catch({message}) {
            setAlert(AlertMessage(message))
        }  
        
        setLoading(false)
    }  // in auth functional //////// in auth functional ////////// in auth functional ////////



    async function metaDateForParser() {
        const currentUser = app.auth().currentUser
        const snapshot = await database.ref(`/privat/${currentUser.uid}`).once('value')
        const _PIN = await snapshot.val().passwordPIN
        const _NewUser = await snapshot.val().newUser
        const _BoolPath = !!(_PIN || _NewUser)

        return {
            isNewUser: _NewUser,
            passwordPIN: _PIN,
            boolPath: _BoolPath
        }
    }

    const getName = () => app.auth().currentUser.displayName
    
    function updateDateForParser(pin = false) {
        const currentUser = app.auth().currentUser
        const updates = {
            [`/privat/${currentUser.uid}/newUser`]: false,
            [`/privat/${currentUser.uid}/passwordPIN`]: pin
        }
        
        database.ref().update(updates)
    }  // in parser functional /////// in parser functional /////// in parser functional /////

    

    async function comeOutAccount() {
        await setOnlineStatus(false)
        await app.auth().signOut()
        app.auth().onAuthStateChanged(user => user ? setAuth(true) : setAuth(false))
    } 



    async function setOnlineStatus(online) {
        const updates ={ [`/users/${app.auth().currentUser.uid}/online`]: online }
        await database.ref().update(updates)
    }  // in main functional ////// in main functional ////// in main functional ////


    return (
        <FirebaseContext.Provider value={
            {
                auth: {createAccount, comeInAccount, restorePassword},
                parser: {metaDateForParser, getName, updateDateForParser},
                main: {comeOutAccount, setOnlineStatus}
            }
        }>
            {children}
        </FirebaseContext.Provider>
    )
}