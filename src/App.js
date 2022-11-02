import React from 'react'
import Slider from './components/slider/Slider'
import Home from './components/Home/Home'
import Network from './components/social/Network'
import Form from './components/Newsletter/Form'
import Instagram from './components/Instagram/Instagram'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Slider />
      <Home />
      <Instagram />
      <Network />
      <Form />
      <Footer />

    </div>
  )
}

export default App