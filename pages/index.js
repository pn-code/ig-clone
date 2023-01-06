import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed";

export default function Home() {
    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>IG Clone</title>
                <meta name="description" content="Instagram Clone" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Navbar />
                <Feed />
                <button onClick={() => signIn()}>Login</button>
            </div>
        </div>
    );
}
