import {arrayOfCheck} from '../staticDate'
import PropTypes from 'prop-types'

const validationFields = type1 => {
    const verification = arrayOfCheck.find(elem => elem.type === type1)
    const {reg, defaultVal, numbers: {min, max}, message} = verification
    
    return function(text) {
        const TextLength = text.trim().length

        if(!TextLength) {
            return defaultVal
        }

        if((min !== null) && !((TextLength >= min) && (TextLength <= max))) {
            return message.error 
        }

        if((reg !== null) && !reg.test(text)) {
            return message.error
        }

        const repeat = text.trim().split('__')

        if(repeat.length === 2) {
            return repeat[0] === repeat[1] ? message.success : message.error  
        }

        return message.success
    }
  }


validationFields.propTypes = {
    type: PropTypes.string.isRequired
}

export {validationFields}