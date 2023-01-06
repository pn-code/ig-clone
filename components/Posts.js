import React from "react";
import Post from "./Post";
import { faker } from "@faker-js/faker";

const data = [
    {
        id: "123",
        username: faker.internet.userName(),
        userAvatar: faker.image.avatar(),
        img: faker.image.abstract(800, 800, true),
        caption: "hello world, this is a test",
    },
    {
        id: "124",
        username: faker.internet.userName(),
        userAvatar: faker.image.avatar(),
        img: faker.image.abstract(800, 800, true),
        caption: "hello world, this is a test",
    },
    {
        id: "125",
        username: faker.internet.userName(),
        userAvatar: faker.image.avatar(),
        img: faker.image.abstract(800, 800, true),
        caption: "hello world, this is a test",
    },
];

const Posts = () => {
    return (
        <div>
            {data.map((post) => (
                <Post
                    key={post.id}
                    username={post.username}
                    userAvatar={post.userAvatar}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
};

export default Posts;
