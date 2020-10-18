import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const ListItem = ({id, img, name, online, styles}) => (
    <Link key={id} to={`/home/${id}`}
        className="list-group-item d-flex align-items-center bg-transparent border-0 disabled-underline"
        style={styles.text}
    >
        <img src={img} className="mr-3 avatar-sizes" 
            alt="friend" style={{borderColor: styles.text.color}}
        />
        <div className="media-body">
            <h5 className="mt-0 mb-1">{name}</h5>
            <span>{online ? 'online' : 'offline'}</span>
        </div>
    </Link>
)

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {ListItem}