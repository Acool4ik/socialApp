import React, {useState, useRef, useContext, useEffect} from 'react'  // libraris
import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

import {FirebaseContext} from '../../context/firebase/FirebaseContext'  // context

import {defaultRefError, typeFields, SIGN_IN_TYPE, SIGN_UP_TYPE, RESTORE, success} from '../staticDate'  // static

import {validationFields} from '../functions/validationFields'  // etitional functional

const Form = ({styles, alert, loading, date}) => {
    const {auth} = useContext(FirebaseContext)
    const {createAccount, comeInAccount, restorePassword} = auth

    const {NAME_TYPE, EMAIL_TYPE, PASSWORD_TYPE, REPEAT_TYPE} = typeFields // types for inp handlers

    const {name, email, password, repeatPassword, btnText, operationType} = date  // static data 
    const {emailErr, nameErr, password_1Err, password_2Err} = defaultRefError
    
    let location = useLocation()

    const [nameInp, setNameInp] = useState('')  // state for inputs
    const [emailInp, setEmailInp] = useState('')
    const [password1Inp, setPassword1Inp] = useState('')
    const [password2Inp, setPassword2Inp] = useState('')

    const massSetStateInput = [setNameInp, setEmailInp, setPassword1Inp, setPassword2Inp]

    useEffect(() => { massSetStateInput.map(funcInp => funcInp('')) }, [location])

    const nameRef = useRef(null)  // creating links for focus on the inputs 
    const emailRef = useRef(null)
    const password1Ref = useRef(null)
    const password2Ref = useRef(null)

    const nameError = useRef(nameErr)  // links for display message in validation-fields without render
    const emailError = useRef(emailErr)
    const password1Error = useRef(password_1Err)
    const password2Error = useRef(password_2Err)
    
    function submitHandlers(event) {
        event.preventDefault()
        let flagError = false

        const checkIf = (errorRef, inpRef) => {
            if((errorRef.current !== success) && (inpRef.current !== null)) {
                inpRef.current.focus()
                flagError = true
            }
        }

        checkIf(password2Error, password2Ref)
        checkIf(password1Error, password1Ref)
        checkIf(emailError, emailRef)
        checkIf(nameError, nameRef)

        if(!flagError) {
            if(operationType === SIGN_IN_TYPE) {
                comeInAccount(emailInp, password1Inp, loading, alert)
            }
            if(operationType === SIGN_UP_TYPE) {
                createAccount(emailInp, password1Inp, nameInp, loading, alert) 
            }
            if(operationType === RESTORE) {
                restorePassword(emailInp, loading, alert)
            }
        }  

    }

    const writeInp = (setState, fieldName, refError, e) => {
        const message = e.target.value
        setState(message)

        if(fieldName === REPEAT_TYPE) {
            refError.current = validationFields(fieldName)(`${message}__${password1Inp}`) 
        } else {
            refError.current = validationFields(fieldName)(message) 
        }
    }

    return (
        <form className="pt-4 pb-4" onSubmit={submitHandlers} style={styles.text}>
            {
                name ? 
                <div className="form-group mb-4">
                    <label htmlFor="InputName">Name</label>
                    <input type="text" className="form-control bg-transparent" id="InputName" name="name" 
                        placeholder="enter name"
                        onChange={writeInp.bind(null, setNameInp, NAME_TYPE, nameError)}
                        style={styles.text}
                        value={nameInp}
                        ref={nameRef}
                    />
                    <small className="form-text text-muted">{nameError.current}</small>
                </div> : null  
            }

            {
                email ?
                <div className="form-group mb-4">
                    <label htmlFor="InputEmail">Email address</label>
                    <input type="email" className="form-control bg-transparent" id="InputEmail" name="email"
                        placeholder="enter email"
                        onChange={writeInp.bind(null, setEmailInp, EMAIL_TYPE, emailError)}
                        style={styles.text}
                        value={emailInp}
                        ref={emailRef}
                    />
                    <small className="form-text text-muted">{emailError.current}</small>
                </div> : null
            }

            {
                password ?
                <div className="form-group mb-4">
                    <label htmlFor="InputPassword">Password</label>
                    <input type="password" className="form-control bg-transparent" id="InputPassword" name="password1" 
                        placeholder="enter password"
                        onChange={writeInp.bind(null, setPassword1Inp, PASSWORD_TYPE, password1Error)}
                        style={styles.text}
                        value={password1Inp}
                        ref={password1Ref}
                    />
                    <small className="form-text text-muted">{password1Error.current}</small>
                </div> : null
            }
            
            {
                repeatPassword ? 
                <div className="form-group mb-4">
                    <label htmlFor="InputRepeat">Repeat password</label>
                    <input type="password" className="form-control bg-transparent" id="InputRepeat" name="password2" 
                        placeholder="repeat password"
                        onChange={writeInp.bind(null, setPassword2Inp, REPEAT_TYPE, password2Error)}
                        style={styles.text}
                        value={password2Inp}
                        ref={password2Ref}
                    />
                    <small className="form-text text-muted">{password2Error.current}</small>
                </div> : null  
            }

            <button type="submit" className="btn btn-dark">{btnText}</button>
        </form>
    )
}

Form.propTypes = {
    styles: PropTypes.objectOf(Object).isRequired,
    alert: PropTypes.func.isRequired,
    loading: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired
}

export {Form} 