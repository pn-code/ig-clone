export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        res.json({url: process.env.CLOUDINARY_URL})
    }
}
