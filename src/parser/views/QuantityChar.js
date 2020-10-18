import React from 'react'
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

const QuantityChar = ({length}) => {
    return ( 
        <p className="d-flex justify-content-center align-items-center mt-2 mb-2">
            {
                new Array(length)
                .fill('')
                .map((_, index) => <FontAwesomeIcon key={index} icon={faCircle} className="ml-1 mr-1" size="xs" /> )
            }
        </p>
    )
}

QuantityChar.propTypes = {
    length: PropTypes.number.isRequired
}

export {QuantityChar}