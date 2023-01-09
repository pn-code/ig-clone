import { useSession } from 'next-auth/react';
import React from 'react'

const MiniProfile = () => {
const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='rounded-full object-cover h-16 w-16 border p-[2px]' src={session?.user?.image} alt="profile"/>
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>
        <button className='text-blue-400 text-sm font-semibold hover:text-blue-600 transition-all ease-out'>Sign out</button>
    </div>
  )
}

export default MiniProfile