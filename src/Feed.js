import React, { useState, useEffect } from 'react'
import StoryReel from "./StoryReel"
import  "./Feed.css"
import Post from "./Post"; 
import MessageSender from './MessageSender'
import db from "./firebase";
const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data:doc.data()})))
        ))
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                  key={post.data.id}
                  profilePic={post.data.FeedprofilePic}
                  message={post.data.message}
                  timestamp={post.data.timestamp}
                  username={post.data.username}
                  image={post.data.image} 
                />
            ))}
        </div>
    )
}

export default Feed
