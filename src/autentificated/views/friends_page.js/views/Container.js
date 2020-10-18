import React from 'react'
import {ListItem} from './ListItem'
import PropTypes from 'prop-types'

const Container = ({title, data, styles}) => (
    <>
    <h5>{title}</h5>
    <ul className="list-group">
        {
            data.length !== 0 ? 
            data.map(element => <ListItem key={element.id} {...element} styles={styles} />)
            : `no have ${title}` 
        }   
    </ul>
    </>
)

Container.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(Object).isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {Container}