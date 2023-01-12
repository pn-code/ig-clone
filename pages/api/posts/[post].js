import dbConnect from "../../../dbConnect";
import Post from "../../../models/Post";
import Comment from "../../../models/Comment";

export default async function handler(req, res) {
    await dbConnect();
    if (req.method == "PUT") {
        if (req.body.comment) {
            try {
                const comment = await new Comment(req.body.comment);
                const post = await Post.findById(req.body._id)
                post.comments.push(comment)
                post.save();
                res.json({ status: "Success", post: post });
            } catch {
                res.status(400).json({ success: "false" });
            }
        }
    }
}
