import React from 'react'
import {Footer, Header} from './containers'
import {CTA, Navbar} from './components'
import {Curve} from './assets'
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='nav__header'><p>love. grow. serve. go.</p></div>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <div className='curve__heroimage'>
          <img src={Curve} alt="curve"/>
        </div>
        <CTA />
        <Footer />
    </div>
  )
}

export default App