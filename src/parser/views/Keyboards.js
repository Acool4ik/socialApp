import React from 'react'
import PropTypes from 'prop-types'

import {numbers} from '../staticDate'

const Keyboards = ({handler}) => (numbers.map(num => num.flag === false ? (<span key={num.id} ></span>) :
        (
            <button key={num.id} type="button" className="btn btn-outline-dark pass-btns"
                onClick={() => handler(num.value)}
            >
                {num.value}
            </button>
        )
    )
)

Keyboards.propTypes = {
    handler: PropTypes.func.isRequired
}

export {Keyboards}

    