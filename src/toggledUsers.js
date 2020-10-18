import React from 'react'
import PropTypes from 'prop-types'

import {AutentificatedToggled} from './autentificated/AutentificatedToggled'
import {Auth} from './auth/Auth'


const toggledUsers = (bool = false) => (bool ? <AutentificatedToggled /> : <Auth />)

toggledUsers.propTypes = {
    bool: PropTypes.bool.isRequired
}

export {toggledUsers}