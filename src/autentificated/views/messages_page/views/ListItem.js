import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ListItem = ({id, name, img, lastMessage, unreadMessages, styles}) => (
    <Link to={`/messages/${id}`} 
        className="list-group-item d-flex align-items-center justify-content-between bg-transparent disabled-underline"
        style={{...styles.text, borderColor: styles.text.color}}
    >
        <div className="d-flex align-items-center" >
            <img src={img} className="mr-3 avatar-sizes" 
                alt="avatar" 
                style={{borderColor: styles.text.color}}
            />
            <div className="media-body">
                <h5 className="mt-0 mb-2">{name}</h5>
                <span>{lastMessage.sender}:&nbsp;</span>&nbsp;{lastMessage.message}
            </div>
        </div>
        <span className="badge badge-primary badge-pill">{unreadMessages.length}</span>
    </Link>
)

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    lastMessage: PropTypes.object.isRequired,
    unreadMessages: PropTypes.arrayOf(Object).isRequired,
    styles: PropTypes.objectOf(Object).isRequired,
}

export {ListItem}