import React from 'react'
import PropTypes, { object } from 'prop-types'

const EditionalBtns = ({buttons, styles}) => (buttons.map(btn => btn.flag === false ? (<span key={btn.id}></span>) :
        (
            <button key={btn.id} style={styles.text} type="button" styles={styles.text} className="btn btn-outline-castom"
                onClick={() => btn.handler()}
            >
                {btn.value}
            </button>
        )
    )   
)

EditionalBtns.propTypes = {
    buttons: PropTypes.arrayOf(object).isRequired,
    styles: PropTypes.objectOf(Object).isRequired
}

export {EditionalBtns}