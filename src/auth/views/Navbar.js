import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt, faCat, faLightbulb, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({setTheme, styles}) => (
    <>

    <nav className="navbar navbar-light bg-transparent">
        <div className="container pr-0 pl-0">
            <Link to="/signin" className="navbar-brand d-flex align-items-center mr-2" style={styles.text}>
                <FontAwesomeIcon icon={faCat} className="mr-2" size="lg" />
                Logo SVG              
            </Link>
            <div className="d-flex align-items-center">
                <div className="ux-icon" onClick={() => setTheme(prev => !prev)}>
                    <FontAwesomeIcon icon={faLightbulb} size="lg" className="m-2" />
                </div>
                <NavLink to="/signin" exact className="ux-icon ml-1 mr-1" style={styles.text}>
                    <FontAwesomeIcon icon={faSignInAlt} size="lg" className="m-2" />
                </NavLink>
                <NavLink to="/signup" className="ux-icon" style={styles.text}>
                    <FontAwesomeIcon icon={faUserPlus} size="lg" className="m-2" />
                </NavLink>
            </div>
        </div>
    </nav>

    <hr className="w-100" style={styles.back}/>
    </>
)

Navbar.propTypes = {
    setTheme: PropTypes.func.isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {Navbar}