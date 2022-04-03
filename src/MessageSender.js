import React, {useState, useEffect} from 'react'
import { Avatar } from "@material-ui/core"
import "./MessageSender.css"
import db from "./firebase";
import firebase from 'firebase/compat/app';
import { useStateValue } from "./StateProvider"

const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image:imageUrl
    })
        setInput("");
        setImageUrl("");
    };



    return (
        <div className='messagesender'>
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input value={input} className="messageSender__input" type="text" placeholder={`whats on your mind`} onChange={(e) => setInput(e.target.value)} />
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder="image Url (optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">

                </div>
            </div>
        </div>
    )
}

export default MessageSender
