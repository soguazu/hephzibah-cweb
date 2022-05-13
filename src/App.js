import React from 'react'
import {Footer, Header} from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='nav__header'></div>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <CTA />
        <Footer />
    </div>
  )
}

export default App