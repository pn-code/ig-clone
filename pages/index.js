import Head from "next/head";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
import {useState, useEffect} from "react";
import axios from "axios";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const [ fetchAPI, setFetchAPI ] = useState(true);

    console.log(posts)
    useEffect(() => {
        const getPosts = async () => {
            await axios.get("/api/posts").then((res) => setPosts(res.data.data));
            console.log("Fetching...")
            setFetchAPI(false)
        }
        // setPosts with GET request to our API
        if (fetch) {
            getPosts();
        }


    }, [ fetchAPI ]);

    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>IG Clone</title>
                <meta name="description" content="Instagram Clone" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Navbar />
            <Feed posts={posts} setPosts={setPosts} fetchAPI={fetchAPI} setFetchAPI={setFetchAPI}/>
            <Modal posts={posts} setPosts={setPosts} fetchAPI={fetchAPI} setFetchAPI={setFetchAPI}/>
        </div>
    );
}