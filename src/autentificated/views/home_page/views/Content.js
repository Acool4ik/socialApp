import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {WrapperCategory} from './WrapperCategory'
import {WrapperItem} from './WrapperItem'

const Content = ({data, styles}) => {

    const defaultWrapper = {
        status: true,
        id: ''
    }

    const [wrapper, setWrapper] = useState(defaultWrapper)

    

    if(!data.length) {
        return <p className="p-4 m-4 text-center position-relative" style={{marginTop: '50px'}}>
            you no have categories :((
        </p>
    }
    
    return <div className="d-flex flex-column align-items-center" >
        {
            wrapper.status ? 
            data.map(wrapper => <WrapperCategory key={wrapper.id} 
                {...wrapper} wrapper={setWrapper} styles={styles} 
            />)
            :
            <WrapperItem {...data.find(element => wrapper.id === element.id)} 
                wrapper={setWrapper} styles={styles} 
            />
        }
    </div>
}

Content.propTypes = {
    data: PropTypes.arrayOf(Object).isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {Content}