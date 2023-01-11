import React from "react";
import { BiDotsHorizontalRounded, BiPaperPlane } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsChatDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";

const Post = ({ id, username, userAvatar, image, caption }) => {
    const { data: session } = useSession();

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
            <img className="object-cover w-full" src={image} alt="/" />

            {/* Buttons */}
            {session && (
                <div className="flex justify-between p-4 border-b">
                    <div className="flex space-x-4">
                        <AiOutlineHeart className="btn" size={30} />
                        <BsChatDots className="btn" size={20} />
                        <BiPaperPlane className="btn" size={24} />
                    </div>

                    <BsBookmark className="btn" size={24} />
                </div>
            )}

            {/* Caption */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username}</span>
                {caption}
            </p>
            {/* Comments */}
            {/* Input Box */}
            {session && (
                <form className="flex items-center p-4">
                    <BsEmojiSmile size={24} />
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        className="border-none flex-1 focus:ring-0 outline-none"
                    />
                    <button className="font-semibold text-blue-400">
                        Post
                    </button>
                </form>
            )}
        </div>
    );
};

export default Post;
