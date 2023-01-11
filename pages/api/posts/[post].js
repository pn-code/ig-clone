import dbConnect from "../../../dbConnect";
import Post from "../../../models/Post";

// API ROUTES
export default async function handler(req, res) {
    await dbConnect();
    if (req.method == "PUT") {
        try {
            console.log(req.body.comment)
            const post = await Post.findById(req.body._id)
            post.comments.push(req.body.comment)
            post.save();
            res.json({ status: "Success", post: post });
        } catch {
            res.status(400).json({ success: "false" });
        }
    }
}
