import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import {CSSTransition} from 'react-transition-group'


const Modal = ({modal: {title, input, handler}, setModal, styles}) => {
    
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
        return () => setAnimate(false)
    }, [])

    return <div className="modal d-block">
    <CSSTransition in={animate} timeout={400} classNames="modal-myself"  >
    <div className="modal-dialog modal-myself">
    <div className="modal-content border" style={{...styles.text, ...styles.main}} >

        <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" 
                onClick={() => setModal(prev => ({...prev, status: false}))} 
            >
                <span style={styles.text}>
                    &times;
                </span>
            </button>
        </div>
        
        {
           input ? 
           <div className="modal-body">
               <p>Enter text</p>
               <input type="text" className="bg-transparent" style={styles.text} />
           </div> : null
        }

        <div className="modal-footer">
            <button type="button" className="btn btn-outline-dark" style={{...styles.text, borderColor: styles.text.color}}
                onClick={() => setModal(prev => ({...prev, status: false}))}
            >
                Cansel
            </button>
            <button type="button" className="btn btn-outline-dark" style={{...styles.text, borderColor: styles.text.color}}
                onClick={async() => await handler()}
            >
                Ok
            </button>
        </div>

    </div>
    </div>
    </CSSTransition>
    </div>
}

Modal.propTypes = {
    modal: PropTypes.object.isRequired,
    setModal: PropTypes.func.isRequired
}

export {Modal}