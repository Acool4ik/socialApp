import React, {useEffect, useState} from 'react'  // libraries
import PropTypes from 'prop-types'

import {CSSTransition} from 'react-transition-group'  // elements from other libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCat} from '@fortawesome/free-solid-svg-icons'

const LogoPresent = ({name, styles}) => {
    const [toggleCSS, setToggleCSS] = useState(false)

    useEffect(() => { 
        setToggleCSS(true)
        return () => setToggleCSS(false)
    }, [])

    return (
        <CSSTransition in={toggleCSS} timeout={1000} classNames="my-logo-present">
            <div style={styles.main} className="vh-100 overflow-hidden d-flex flex-column align-items-center justify-content-around">
                <div className="d-flex flex-column align-items-center" style={styles.text} >
                    <p className="mt-2">Welcome {name}</p>
                    <FontAwesomeIcon icon={faCat} size="6x" />
                </div>

                <div className="d-flex flex-column align-items-center" style={styles.text} >
                    <small style={{opacity: 0.7}}>from</small>
                    <p className="mt-2">Acool4ik</p>
                </div>
            </div>
        </CSSTransition> 
    )
}

LogoPresent.propTypes = {
    name: PropTypes.string.isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {LogoPresent}

 