import React from 'react'
import PropTypes from 'prop-types'

const WrapperCategory = ({id, title, description, lastUpdate, img, wrapper, styles}) => (
    <div className="card bg-transparent mt-4 w-100" 
        style={{borderColor: styles.text.color}}
    >
        <h5 className="card-body card-title pb-0">{title}</h5>
        <img src={img} className="card-img-top" alt="description" />
        <div className="card-body">
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-between align-items-center" >
                <span>Last update:  {lastUpdate}</span>
                <button type="button" className="btn btn-outline-dark"
                    onClick={() => wrapper({status: false, id})}
                >
                    Go To Items
                </button>
            </div>
        </div>
    </div>
)

WrapperCategory.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    lastUpdate: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    wrapper: PropTypes.func.isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {WrapperCategory}