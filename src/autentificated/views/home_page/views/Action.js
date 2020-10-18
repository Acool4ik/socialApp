import React, {useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Action = () => {

    const myUid = ''
    const addedFriend = true
    const home = false
   
    const dropdown = useRef(null)
    const [drop, setDrop] = useState(false)

    useEffect(() => {
        dropdown.current.style.display = drop ? 'inline-block' : 'none'
    }, [drop])



    return <div className="d-flex align-items-start">
        
        <button className="btn btn-outline-dark btn-lg" type="button">
            Remove
        </button>

        <div className="btn-group ml-4">
            <button className="btn btn-outline-dark btn-lg dropdown-toggle" type="button"
                onClick={() => setDrop(prev => !prev)}
            >
                More action
            </button>
            <div className="dropdown-menu" ref={dropdown}>
                <Link className="dropdown-item p-2 " to="/messages" >message</Link>
                <Link className="dropdown-item p-2 " to={`/friends/${myUid}`} >friends</Link>
                <Link className="dropdown-item p-2" to={`/gallery/${myUid}`} >gallery</Link>
            </div>
        </div>
    
    </div>
}


export {Action}