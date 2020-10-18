import PropTypes from 'prop-types'

const setNeededStyles = (className, ref) => {

    ref.current.classList.remove(className)

    if(document.body.scrollHeight <= window.screen.height) {
        ref.current.classList.add(className)
    }

}

setNeededStyles.propTypes = {
    className: PropTypes.string.isRequired,
    ref: PropTypes.object.isRequired
}

export {setNeededStyles}