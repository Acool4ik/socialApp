import React from 'react'  // libraries
import PropTypes from 'prop-types'

import {NavLink} from 'react-router-dom'  // elements from react-router

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' // elements from font awesome
import {faHome, faUserFriends, faEnvelope, faNewspaper} from '@fortawesome/free-solid-svg-icons'


const Footer = ({myUid = '', styles}) => (
    <div className="pb-4 fixed-bottom">
        <hr className="mb-4 mt-1" style={styles.back} />
        <div className="container"> 
            <div className="d-flex align-items-center justify-content-between" >
                <NavLink to="/newsline" style={styles.text} className="ux-icon d-flex p-2" >
                    <FontAwesomeIcon icon={faNewspaper} size="lg" className="m-auto" />
                </NavLink>
                <NavLink to="/messages" style={styles.text} className="ux-icon d-flex p-2" >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="m-auto" />
                </NavLink>
                <NavLink to={`/friends/${myUid}`} style={styles.text} className="ux-icon d-flex p-2" >
                    <FontAwesomeIcon icon={faUserFriends} size="lg" className="m-auto" />
                </NavLink>
                <NavLink to={`/home/${myUid}`} style={styles.text} className="ux-icon d-flex p-2" exact >
                    <FontAwesomeIcon icon={faHome} size="lg" className="m-auto" />
                </NavLink>
            </div>
        </div>
    </div>
)


Footer.propTypes = {
    myUid: PropTypes.string.isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {Footer}



