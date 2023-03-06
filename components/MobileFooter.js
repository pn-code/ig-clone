import React from "react";
import Link from "next/link";
import { BiPaperPlane, BiPlusCircle } from "react-icons/bi";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const MobileFooter = () => {
    const { data: session } = useSession();
    const [openModal, setOpenModal] = useRecoilState(modalState);

    return (
        <div className="fixed left-0 bottom-0 w-full bg-gray-100 py-2 px-8 md:hidden">
            <div className="flex w-full justify-between items-center">
                <Link href="/">
                    <AiFillHome className="navBtn" size={24} />
                </Link>
                {session ? (
                    <>
                        <div className="relative">
                            <BiPaperPlane className="navBtn" size={24} />
                            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 text-white bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                3
                            </div>
                        </div>
                        <BiPlusCircle
                            onClick={() => setOpenModal(true)}
                            className="navBtn"
                            size={24}
                        />
                        <HiOutlineUserGroup className="navBtn" size={24} />
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
    );
};

export default MobileFooter;
