import React from "react";
import Image from "next/image";

const Story = ({ img, username }) => {
    return (
        <div>
            <img className="h-14 w-14 rounded-full p-[1.5px] border-red-400 border-2 object-contain cursor-pointer hover:scale-110 transition transform ease-out" src={img}/>
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    );
};

export default Story;
