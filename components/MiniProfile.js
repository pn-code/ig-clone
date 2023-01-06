import React from 'react'

const MiniProfile = () => {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img className='rounded-full object-cover h-16 w-16 border p-[2px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bucephala-albeola-010.jpg/800px-Bucephala-albeola-010.jpg" alt="profile"/>
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>Username</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>
        <button className='text-blue-400 text-sm font-semibold hover:text-blue-600 transition-all ease-out'>Sign out</button>
    </div>
  )
}

export default MiniProfile