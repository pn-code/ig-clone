import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [ fetch, setFetch ] = useState(true);

    useEffect(() => {
        // setPosts with GET request to our API
        if (fetch) {
            axios.get("/api/posts").then((res) => setPosts(res.data.data));
            console.log("Fetching...")
            setFetch(false)
        }
    }, [ fetch ]);

    return (
        <div>
            {posts.map((post) => (
                <Post
                    id={post._id}
                    key={post._id}
                    username={post.username}
                    avatar={post.avatar}
                    caption={post.caption}
                    image={post.image}
                    date={post.date}
                    comments={post.comments}
                    likes={post.likes}
                    setFetch={setFetch}
                />
            ))}
        </div>
    );
};

export default Posts;
