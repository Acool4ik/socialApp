import React from 'react'
import {ItemCategory} from './ItemCategory'

const WrapperItem = ({items, wrapper, styles}) => {


    return <div className="w-100">
        <button type="button" className="btn btn-outline-dark mt-3 mb-2"
            onClick={() => wrapper({status: true, id: ''})}
            style={styles.text}
        >
            Go to category
        </button>

        <ul className="list-group list-group-flush" style={styles.text}>
            {
                items.map((item, index) => <ItemCategory key={index} {...item} styles={styles} /> )
            }
        </ul>
    </div>
    
}

export {WrapperItem}