import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    // Populate app with random suggestions
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

        Array.from({ length: 5 }).forEach(() => {
            users.push(createRandomUser());
        });

        setSuggestions(users);
    }, []);

    return (
        <div className="mt-4 ml-10">

            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>

            <div>
              {suggestions.map(profile => (<div key={profile.userId} className="flex items-center justify-between mt-3">
                <img className="w-10 h-10 rounded-full border p-[2px] cursor-pointer" src={profile.avatar} alt=""/>
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-sm">{profile.username}</h2>
                  <h3 className="text-xs text-gray-400">{profile.email}</h3>
                </div>
                <button className="text-blue-400 text-sm font-semibold">Follow</button>
              </div>))}
            </div>
        </div>
    );
};

export default Suggestions;
