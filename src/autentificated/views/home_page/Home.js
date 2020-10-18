import React, {useState} from 'react'  // libraries

import {Header} from './views/Header'
import {Action} from './views/Action'
import {Content} from './views/Content'

import {Link} from 'react-router-dom'


const Home = ({styles, myUid}) => {

    const myProfileDataDefault = {
        header: {
            name: 'Nic Name',
            status: 'text test',
            smile: 'link to smile',
            online: true
        },
        categories: [
            {id: 'test1', title: 'test title', description: 'description', 
            lastUpdate: '124247', 
            img: 'https://via.placeholder.com/300x100',
            items: [
                {text: 'text1', likes: 30},
                {text: 'text1', likes: 26},
                {text: 'text1', likes: 30}
            ]},
            {id: 'tesft1', title: 'test title', description: 'description', 
            lastUpdate: '124247', 
            img: 'https://via.placeholder.com/300x100',
            items: [
                {text: 'text1', likes: 30},
                {text: 'text1', likes: 26},
                {text: 'text1', likes: 30}
            ]}
        ]
    }

    const [profile, setProfile] = useState(myProfileDataDefault)


    return <>
        <Header data={profile.header} styles={styles} />
        <Link to={`/gallery/${myUid}`} className="btn btn-outline-dark btn-lg btn-block "
            style={styles.text}
        >
            Gallery
        </Link>
        <Content data={profile.categories} styles={styles} />
    </>

}

export {Home}