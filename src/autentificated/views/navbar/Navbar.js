import React, {useContext} from 'react'  // libraries
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' // elements from font awesome
import {faCogs, faLightbulb, faMusic, faDoorOpen} from '@fortawesome/free-solid-svg-icons'

import {dateForModal} from '../../static' // static

import {FirebaseContext} from '../../../context/firebase/FirebaseContext'  // pull out signout function


const Navbar = ({styles, theme, sidebar, modal}) => {
    const {main: {comeOutAccount}} = useContext(FirebaseContext)

    return <div className="pt-4 pb-2">
    <div className="container">
    <div className="d-flex align-items-center justify-content-between" >
        <div className="ux-icon d-flex p-2" style={styles.text} 
            onClick={() => modal(dateForModal('do you really want signout?', comeOutAccount))}
        >
            <FontAwesomeIcon className="m-auto" icon={faDoorOpen} size="lg" />
        </div>
        <div className="ux-icon d-flex p-2" style={styles.text}>
            <FontAwesomeIcon className="m-auto" icon={faMusic} size="lg" />
        </div>
        <div className="ux-icon d-flex p-2" style={styles.text}
            onClick={() => theme(prev => !prev)}
        >
            <FontAwesomeIcon className="m-auto" icon={faLightbulb} size="lg" />
        </div>
        <div className="ux-icon d-flex p-2" style={styles.text} 
            onClick={() => sidebar(prev => !prev)}
        >
            <FontAwesomeIcon className="m-auto" icon={faCogs} size="lg" />
        </div>     
    </div>
    </div>
    <hr className="mt-4" style={styles.back} />
    </div>
}

Navbar.propTypes = {
    styles: PropTypes.objectOf(Object).isRequired,
    theme: PropTypes.func.isRequired,
    sidebar: PropTypes.func.isRequired
}

export {Navbar}