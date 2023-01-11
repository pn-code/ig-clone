import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded, BiPaperPlane } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsChatDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import axios from "axios";

const Post = ({ id, username, avatar, image, caption, date, comments}) => {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");

    useEffect(() => {
        
    }, [])

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = {
            username: session.user.username,
            avatar: session.user.image,
            date: Date.now(),
            comment,
        };

        setComment("");

        const data = await axios.put(`/api/posts/${id}`, { _id: id, comment: commentToSend});
        console.log(data);
    };

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className="flex items-center p-5">
                <img
                    className="rounded-full w-12 h-12 object-contain border border-red-400 p-1 mr-3"
                    src={avatar}
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
            { comments.map(comment => <p>{comment.comment}</p>)}
            {/* Input Box */}
            {session && (
                <form className="flex items-center p-4">
                    <BsEmojiSmile size={24} />
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="border-none flex-1 focus:ring-0 outline-none"
                    />
                    <button
                        type="submit"
                        onClick={sendComment}
                        disabled={!comment.trim()}
                        className="font-semibold text-blue-400"
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    );
};

export default Post;
