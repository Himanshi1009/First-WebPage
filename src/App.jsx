import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components1/Nav'
import Body from './components1/Body.jsx'
import Foot from './components1/Foot.jsx'

function App() {

  return (
    
      < div className='h-[775px] bg-gray-900'>
        <Nav />
        <Body/>
        <Foot/>
      </div>
    
     
  )
}

export default App
