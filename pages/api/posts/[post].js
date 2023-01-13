import dbConnect from "../../../dbConnect";
import Post from "../../../models/Post";
import Comment from "../../../models/Comment";
import User from "../../../models/User";

export default async function handler(req, res) {
    await dbConnect();
    if (req.method == "PUT") {
        if (req.body.comment) {
            try {
                const comment = await new Comment(req.body.comment);
                const post = await Post.findById(req.body._id);
                post.comments.push(comment);
                await post.save();
                res.json({ status: "Success", post: post });
            } catch {
                res.status(400).json({ success: "false" });
            }
        } else if (req.body.isLike) {
            try {
                // Grab and check post to see if the user already liked this post
                const post = await Post.findById(req.body.postId);
                const likeIndex = post.likes.findIndex((like) => like.uid == req.body.uid)
                console.log(likeIndex)

                // If the post has not been liked yet...
                if (likeIndex == -1) {
                // Create new user for use
                    console.log(`Pushing user into likes`)
                    const user = await new User({
                        uid: req.body.uid,
                        username: req.body.username,
                    });

                    post.likes.push(user);
                    await post.save();
                } else {
                    // If the post has already been liked...
                    console.log(`Removing user ${post.likes[likeIndex]}`)
                    post.likes.splice(likeIndex, 1)
                    await post.save()
                }

                res.json({ status: "Success", post: post});
            } catch {
                res.status(400).json({ success: "false" });
            }
        }
    }
}
