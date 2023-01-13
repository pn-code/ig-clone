import React, { useState } from "react";
import { BiDotsHorizontalRounded, BiPaperPlane } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsChatDots, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import axios from "axios";
import Moment from "react-moment";

const Post = ({
    id,
    username,
    avatar,
    image,
    caption,
    date,
    comments,
    likes,
    setFetchAPI,
}) => {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [like, setLike] = useState(false);

    const likePost = async () => {
        const res = await axios.put(`/api/posts/${id}`, {
            postId: id,
            uid: session.user.uid,
            username: session.user.username,
            isLike: true,
        });

        const postLikes = res.data.post.likes;

        const filter = Boolean(
            postLikes.filter((like) => like.uid == session?.user?.uid).length
        );

        setLike(filter);

        setFetchAPI(true);
    };
    console.log(like);

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = {
            username: session.user.username,
            avatar: session.user.image,
            date: Date.now(),
            comment: comment,
        };

        setComment("");

        const data = await axios.put(`/api/posts/${id}`, {
            _id: id,
            comment: commentToSend,
        });

        setFetchAPI(true);
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
                        {like ? (
                            <AiFillHeart
                                onClick={likePost}
                                className="btn"
                                size={30}
                            />
                        ) : (
                            <AiOutlineHeart
                                onClick={likePost}
                                className="btn"
                                size={30}
                            />
                        )}
                        <BsChatDots className="btn" size={20} />
                        <BiPaperPlane className="btn" size={24} />
                    </div>

                    <BsBookmark className="btn" size={24} />
                </div>
            )}

            {/* Caption */}
            <p className="p-5 truncate flex justify-between">
                <p>
                    <span className="font-bold mr-1">{username}</span> {caption}
                </p>
                <span className="ml-28 sm-text font-semibold">
                    {likes.length} likes
                </span>
            </p>
            {/* Comments */}
            {comments.length > 0 && (
                <div className="ml-5 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                    {comments.map((comment) => (
                        <div
                            className="flex items-center space-x-2 mb-3"
                            key={comment._id}
                        >
                            <img
                                className="h-7 rounded-full"
                                src={comment.avatar}
                                alt=""
                            />
                            <p className="text-sm flex-1">
                                <span className="font-bold">
                                    {comment.username}
                                </span>{" "}
                                {comment.comment}
                            </p>
                            <Moment className="pr-5 text-sm" fromNow>
                                {comment.date}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}
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
