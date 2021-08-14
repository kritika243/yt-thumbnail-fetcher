import React from 'react'

interface Props {
  thumbnailUrl: string
}

const Thumbnail = ({ thumbnailUrl }: Props) => {
  return (
    <div className='flex items-center m-10 flex-col'>
      <img src={thumbnailUrl} />
    </div>
  )
}

export default Thumbnail
