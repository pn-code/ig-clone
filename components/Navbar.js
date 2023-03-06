import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/ig-logo.png"
import { SiInstagram } from "react-icons/si";
import { BiSearch, BiPaperPlane, BiPlusCircle } from "react-icons/bi";
import { AiFillHome, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Navbar = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50 px-4">
            <div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div>
                    <div className="hidden relative lg:inline-grid w-36 h-24">
                        <Link href="/">
                            <Image
                                src={Logo}
                                layout="fill"
                                objectFit="contain"
                                alt="Instagram"
                            />
                        </Link>
                    </div>

                    {/* Left / Mobile-Icon */}
                    <div className="relative w-10 h-10 lg:hidden flex-shrink-0">
                        <Link href="/">
                            <SiInstagram size={36} />
                        </Link>
                    </div>
                </div>

                {/* Middle / Search Bar*/}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <BiSearch />
                        </div>
                        <input
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* Right / Modal*/}
                <div>
                    <div className="flex items-center justify-end space-x-4">
                        <Link href="/">
                            <AiFillHome className="navBtn" size={24} />
                        </Link>
                        <AiOutlineMenu className="md:hidden" size={32} />
                        {session ? (
                            <>
                                <div className="relative navBtn hidden lg:visible">
                                    <BiPaperPlane
                                        className="navBtn"
                                        size={24}
                                    />
                                    <div className="absolute -top-2 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                        3
                                    </div>
                                </div>
                                <BiPlusCircle onClick={() => setOpen(true)} className="navBtn" size={24} />
                                <HiOutlineUserGroup
                                    className="navBtn"
                                    size={24}
                                />
                                <AiOutlineHeart className="navBtn" size={24} />

                                <img
                                    className="h-8 rounded-full cursor-pointer"
                                    src={session?.user?.image}
                                    alt="profile picture"
                                    onClick={signOut}
                                />
                            </>
                        ) : (
                            <button onClick={signIn}>Sign In</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
