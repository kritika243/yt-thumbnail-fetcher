import React from 'react'
import { FiLink, FiX } from 'react-icons/fi'

interface Props {
  videourl: string
  setVideourl: React.Dispatch<React.SetStateAction<string>>
  submitHandler: React.FormEventHandler
}

const InputUrl = ({ videourl, setVideourl, submitHandler }: Props) => {
  const resetInput = () => {
    setVideourl('')
  }

  return (
    <form className='relative flex' onSubmit={submitHandler}>
      <FiLink className='absolute top-3 left-2 w-6 h-6' />
      <button
        type='button'
        className='absolute top-2 right-40 w-8 h-8 rounded hover:bg-gray-300'
      >
        <FiX className='ml-2 ' onClick={resetInput} />
      </button>
      <input
        className='border-2 border-gray-600 outline-none focus:border-red-600 focus:rounded-2xl rounded-lg p-2 pl-10 text-xl w-full transition-all mr-2 '
        type='url'
        placeholder='Enter video link here'
        value={videourl}
        // onChange={(e) => setVideourl(e.target.value)}
        onChange={(e) => {
          setVideourl(e.target.value)
        }}
      />
      <button className='bg-red-600 text-white text-xl w-40 rounded-2xl hover:rounded-lg transition-all active:bg-red-500'>
        Get Now
      </button>
    </form>
  )
}

export default InputUrl
