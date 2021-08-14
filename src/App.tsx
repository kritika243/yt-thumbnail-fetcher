import React, { useState } from 'react'
import Header from './components/Header'
import InputUrl from './components/InputUrl'
import Thumbnail from './components/Thumbnail'

function App() {
  const [videourl, setVideourl] = useState('')
  const [thumbnailurl, setThumbnailurl] = useState('')

  const submitHandler: React.FormEventHandler = (e) => {
    e.preventDefault()
    const idRegex =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    if (!videourl.match(idRegex)) return
    const videoId = videourl.match(idRegex)![1]
    setThumbnailurl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
  }

  return (
    <div>
      <Header />
      <main className='container mx-auto mt-8'>
        <InputUrl
          videourl={videourl}
          setVideourl={setVideourl}
          submitHandler={submitHandler}
        />
        <Thumbnail thumbnailUrl={thumbnailurl} />
      </main>
    </div>
  )
}

export default App
