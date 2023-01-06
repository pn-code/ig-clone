import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
    const [suggestions, setSuggestions] = useState([]);

    // Populate app with random users
    useEffect(() => {
        const users = [];

        function createRandomUser() {
            return {
                userId: faker.datatype.uuid(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past(),
            };
        }

        Array.from({ length: 15 }).forEach(() => {
            users.push(createRandomUser());
        });

        setSuggestions(users);
    }, []);

    return (
        // Rendered list of stories
        <div className="flex bg-white space-x-2 mt-8 p-6 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {suggestions.map((profile) => (
                <Story
                    key={profile.userId}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    );
};

export default Stories;
