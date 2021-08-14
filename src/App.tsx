import React from 'react'
import Header from './components/Header'
import InputUrl from './components/InputUrl'

function App() {
  return (
    <div>
      <Header />
      <main className='container mx-auto mt-8'>
        <InputUrl />
      </main>
    </div>
  )
}

export default App
