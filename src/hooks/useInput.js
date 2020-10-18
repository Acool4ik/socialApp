import {useState} from 'react'

const useInput = (defaultProps = '', hasSetValue = true) => {
    const [value, setValue] = useState(defaultProps)

    const onChange = event => setValue(event.target.value.trim())

    if(!hasSetValue) {
        return { value, onChange }
    } 

    return { bind: { value, onChange }, setValue }
}

export default useInput