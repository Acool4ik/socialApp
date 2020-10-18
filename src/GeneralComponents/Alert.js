import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({alert: {text = '', className = 'warning'}, setAlert}) => (
    <div className={`alert alert-${className} alert-dismissible mb-0`}>
        <strong>Warning!</strong>&nbsp; 
        {text}
        <button type="button" className="close" onClick={() => setAlert(false)} >
            <span>&times;</span>
        </button>
    </div>
)

Alert.propTypes = {
    alert: PropTypes.object.isRequired,
    setAlert: PropTypes.func.isRequired
}

export {Alert}


