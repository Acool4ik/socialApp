import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Footer = forwardRef(({styles}, ref) => (
        <div ref={ref} className="d-flex flex-column align-items-start pb-3">
            <hr className="w-100" style={styles.back}/>

            <div className="container pt-2">
                <Link to="/restore" className="d-block mb-1 pb-2" style={styles.text}>
                    You are fogot password?
                </Link>
            </div>
        </div> 
    )
)

Footer.propTypes = {
    styles: PropTypes.objectOf(Object).isRequired
}

export {Footer}