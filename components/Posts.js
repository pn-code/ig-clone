import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({posts, setPosts, fetchAPI, setFetchAPI}) => {
    return (
        <div>
            {posts.length > 0 && posts.map((post) => (
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
                    setFetchAPI={setFetchAPI}
                />
            ))}
        </div>
    );
};

export default Posts;
