import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const ItemCategory = ({text, likes, styles}) => {


    return <>
        <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
            style={{borderColor: styles.text.color}}
        >
            {text}
            <div>
                {likes}&nbsp;
                <FontAwesomeIcon icon={faThumbsUp} />
            </div>
        </li>
    </>
}

export {ItemCategory}