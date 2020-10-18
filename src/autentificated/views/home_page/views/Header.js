import React from 'react'

const Header = ({styles}) => {

    const status = 'text test' 
    const name = 'Nic Name'
    const smile = 'here to be smile'
    const online = true

    const isOnline = online ? 'online' : 'offline'

    return <>
        <div className="d-flex justify-content-around align-items-start">
            <img src="https://via.placeholder.com/70" 
                className="mr-3 avatar-sizes" alt="avatar" 
                style={{borderColor: styles.text.color}} 
            />
            <div className="media-body">
                <h5 className="mt-0 mb-1">
                    {name}
                    <span className="ml-2">[{smile}]</span>    
                </h5>
                <span>status:&nbsp;</span>{status}
                <br />
                <strong>{isOnline}</strong>
            </div>
        </div>
        <hr className="w-100" style={styles.back} />
    </>
}


export {Header}