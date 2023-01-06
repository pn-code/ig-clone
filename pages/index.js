import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>IG Clone</title>
                <meta name="description" content="Instagram Clone" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <button onClick={() => signIn()}>Login</button>
            </main>
        </>
    );
}
