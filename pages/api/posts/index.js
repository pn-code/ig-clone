import dbConnect from "../../../dbConnect";
import Post from "../../../models/Post";

// API ROUTES
export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const posts = await Post.find({}).sort([['date', -1]])
                res.json({ status: "Success", data: posts });
            } catch {
                res.status(400).json({ success: "false" });
            }
            break;

        case "POST":
            try {
                const postDetail = {
                    username: req.body.username,
                    avatar: req.body.avatar,
                    image: req.body.image,
                    caption: req.body.caption,
                    date: Date.now(),
                    likes: 0,
                    comments: 0
                };

                const post = await new Post(postDetail);
                post.save()
                res.json({ status: "Success!", post: post });
            } catch (err) {
                console.log(err);
            }
            break;
    }
}
