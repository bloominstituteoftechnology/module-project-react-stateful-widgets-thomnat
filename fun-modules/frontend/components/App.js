import React from 'react'
import helpers, {sum, multiply} from '../helpers/helpers'
import Nav from './Nav'
import Footer from './Footer'


function App() {
  return (
    <div>
      <Nav />
      <div>5 plus 6 is {helpers.sum(5, 6)}</div>
      <div>5 times 6 is {helpers.multiply(5, 6)}</div>
    
      <Footer />
    
    </div>
  )
}

export default App
