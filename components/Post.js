import React from "react";
import { BiDotsHorizontalRounded, BiPaperPlane } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
    BsChatDots,
    BsFillEmojiHeartEyesFill,
    BsBookmark,
} from "react-icons/bs";

const Post = ({ id, username, userAvatar, img, caption }) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img
                    className="rounded-full w-12 h-12 object-contain border border-red-400 p-1 mr-3"
                    src={userAvatar}
                    alt=""
                />
                <p className="flex-1 font-bold">{username}</p>
                <BiDotsHorizontalRounded className="cursor-pointer btn" />
            </div>
            {/* Img */}
            <img className="object-cover w-full" src={img} alt="/" />
            {/* Buttons */}
            <div className="flex justify-between p-4 border-b">
                <div className="flex space-x-4">
                    <AiOutlineHeart className="btn" size={30} />
                    <BsChatDots className="btn" size={20} />
                    <BiPaperPlane className="btn" size={24} />
                </div>

                <BsBookmark className="btn" size={24} />
            </div>

            {/* Caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}
            </p>
            {/* Comments */}
            {/* Input Box */}
        </div>
    );
};

export default Post;
