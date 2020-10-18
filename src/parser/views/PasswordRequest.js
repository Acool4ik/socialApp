import React, {useState, useEffect} from 'react'  //  libraries
import PropTypes from 'prop-types'

import {defaultStateAlert, errorPass, header} from '../staticDate'  // static
        
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'  // elements from libraries
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import {Alert} from '../../GeneralComponents/Alert'  // general elements
import {Spinner} from '../../GeneralComponents/Spinner'

import {QuantityChar} from './QuantityChar'  // local elements
import {Keyboards} from './Keyboards'
import {EditionalBtns} from './EditionalBtns'

import moveKeyboard from '../functions/moveKeybord'
import firstResponse from '../functions/firstResponse'

const PasswordRequest = ({styles, isNew, PIN, setParser, updateDate}) => {
    const [value, setValue] = useState('')

    const [alert, setAlert] = useState(defaultStateAlert)
    const [spiner, setSpinner] = useState(false)

    const {addChar, deleteChar} = moveKeyboard(value, setValue) 
    const {resolve, reject} = firstResponse(value, setSpinner, setAlert, setParser, updateDate)

    useEffect(() => {  // display correct or not password
        if(!isNew && (value.length === 5)) {
            PIN === value ? setParser(false) : setAlert(errorPass)
        }
    }, [value, PIN, isNew, setParser])

    function fogotPass() {  // NEED DO IT // // NEED DO IT // NEED DO IT // NEED DO IT 
        console.log('fogot func__')
    }

    const buttons = isNew ? 
                        [
                           {id: 'btn1', value: 'Cansel', handler: reject, flag: true},
                           {id: 'btn2', flag: false},
                           {id: 'btn3', value: 'Enter', handler: resolve, flag: true}
                        ] 
                        
                        : 

                        [ 
                            {id: 'btn1', flag: false},
                            {id: 'btn2', flag: false}, 
                            {id: 'btn3', value: 'Fogot pass?', handler: fogotPass, flag: true}
                        ]

    return (
        <div style={styles.main} className="vh-100 overflow-hidden d-flex align-items-center justify-content-center">
            <div style={styles.text} className="d-flex m-auto" >
                <div className="mv-690px text-center pl-2 pr-2" >
                    <h3 className="mb-4 pb-2">{ header(isNew) }</h3>
                    
                    { alert.type ? <Alert alert={alert.dataAlert} setAlert={setAlert} /> : null }
                    { spiner ? <Spinner /> : null }

                    <QuantityChar length={value.length} />
                    
                    <div className="container-btns ml-auto mr-auto mt-0 mb-0" >
                        <Keyboards handler={addChar} />
                        <FontAwesomeIcon icon={faTrashAlt} size="2x" onClick={() => deleteChar()} />
                        <EditionalBtns buttons={buttons} styles={styles} />
                    </div>
                </div> 
            </div>
        </div>
    )
}

PasswordRequest.propTypes = {
    styles: PropTypes.objectOf(Object).isRequired,
    setParser: PropTypes.func.isRequired,
    isNew: PropTypes.bool.isRequired,
    updateDate: PropTypes.func.isRequired
}

export {PasswordRequest}