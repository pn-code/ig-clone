import {
    getProviders,
    signIn as signIntoProvider,
} from "next-auth/react";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import IgLogo from "../../public/assets/ig-logo.png";

const signIn = ({ providers }) => {
    return (
        <>
            <Navbar />
            <div className="-mt-20 flex flex-col items-center justify-center min-h-screen py-2 sm:-mt-56 px-14 text-center">
                <Image src={IgLogo} height={50} alt="" />
                <p className="font-xs italic">
                    This is NOT a real app. This was built to showcase web
                    development skills.
                </p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="p-3 bg-blue-500 rounded-lg text-white mb-2"
                                onClick={() =>
                                    signIntoProvider(provider.id, {
                                        callbackUrl: "/",
                                    })
                                }
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}

export default signIn;
