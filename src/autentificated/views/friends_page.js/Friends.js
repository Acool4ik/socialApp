import React, {useState} from 'react'
import PropTypes from 'prop-types'

import {Container} from './views/Container'
import useInput from '../../../hooks/useInput'

const Friends = ({spinner, styles}) => {

    const personeDefault = {
        friends: [
            {id: '1ewfew', name: 'alex', online: false, img: 'https://via.placeholder.com/60'},
            {id: '1ewwfew', name: 'gadjit', online: true, img: 'https://via.placeholder.com/60'},
            {id: '1eweww', name: 'mihail', online: false, img: 'https://via.placeholder.com/60'},
            {id: '1ewfedfw', name: 'evgemiy', online: true, img: 'https://via.placeholder.com/60'}
        ],
        condidates: [
            {id: '1eewcwfew', name: 'elena', online: true, img: 'https://via.placeholder.com/60'},
            {id: '1eewfwfew', name: 'vladilen', online: true, img: 'https://via.placeholder.com/60'},
            {id: '1eefwwwfew', name: 'venya', online: false, img: 'https://via.placeholder.com/60'},
            {id: '1ecwwfew', name: 'gena', online: false, img: 'https://via.placeholder.com/60'}
        ]
    }

    const searchInp = useInput('', false)
    const [persone, setPersone] = useState(personeDefault)
    const [condidates, setCondidates] = useState(false)


    function submitHandler(event) {
        event.preventDefault()
        console.log(searchInp.value)
    }
    
    return <div style={styles.text}>
        <form onSubmit={submitHandler} >
            <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Search panel</label>
                <input type="text" {...searchInp} className="form-control bg-transparent" 
                    style={styles.text} 
                />
            </div>
        </form>

        <Container title={'Friends'} data={persone.friends} styles={styles} />
        
        {
            condidates ? 
            <>
            <hr style={styles.back} />
            <Container title={'Condidates'} data={persone.condidates} styles={styles} />
            </>
            : null
        }
        
    </div>
}

Friends.propTypes = {
    spinner: PropTypes.func.isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {Friends}