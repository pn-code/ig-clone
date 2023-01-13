import Head from "next/head";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

export default function Home() {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
                <button onClick={()=>console.log(posts)}>Click</button>
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
            <Feed />
            <Modal />
        </div>
    );
}