import React, {useState} from 'react'
import {ListItem} from './views/ListItem'

const Messages = ({alert, spinner, modal, styles}) => {

    const metaMessagesDefault = [
        {id: '1ewfew', name: 'alex', img: 'https://via.placeholder.com/60',
            lastMessage: {sender: 'you', message: 'test3'},
            unreadMessages: [
                {sender: 'alex', messages: 'test1'},
                {sender: 'you', messages: 'test1'}
            ] 
        },
        {id: '1dseww', name: 'grisha', img: 'https://via.placeholder.com/60',
            lastMessage: {sender: 'grisha', message: 'test3'},
            unreadMessages: [
                {sender: 'alex', message: 'test1'},
                {sender: 'you', message: 'test1'}
            ] 
        },
        {id: 'nytjyseww', name: 'nekita', img: 'https://via.placeholder.com/60',
            lastMessage: {sender: 'grisha', message: 'testmess'},
            unreadMessages: [
                {sender: 'alex', message: 'test1'},
                {sender: 'you', message: 'test1'}
            ] 
        },  
    ]
    
    const [messages, setMessages] = useState(metaMessagesDefault)


    return <>
    <h5>Messages</h5>
    <ul className="list-group list-group-flush bg-transparent">
        {
            messages.map(message => <ListItem key={message.id} {...message} styles={styles} />)
        }
    </ul>
    </>
}

export {Messages}