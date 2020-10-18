import React, {useContext, useEffect} from 'react'
import {ThemeContext} from '../context/themeColor/themeContext'

export const Spinner = ({banTouch = true}) => {
    const {styles} = useContext(ThemeContext)

    useEffect(()=> {
        document.addEventListener("click", handler, true);

        function handler(e) {
            e.stopPropagation();
            e.preventDefault();
        }

        return () => document.removeEventListener("click", handler, true)
    }, [])

    const wrapper = banTouch ? {height: document.body.scrollHeight} : {}
    
    return (
        <div className="position-absolute w-100" style={wrapper}>
            <div className="spinner-border position-fixed spinner" role="status" style={styles.text}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
