import React from 'react'
import { FiYoutube } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='bg-red-800 rounded-b-2xl p-5 shadow-xl'>
      <h1 className='text-center text-4xl text-gray-100 font-bold flex items-center justify-center'>
        <FiYoutube className='mr-4 w-16 h-16' />
        Get YouTube Thumbnail
      </h1>
    </header>
  )
}

export default Header
