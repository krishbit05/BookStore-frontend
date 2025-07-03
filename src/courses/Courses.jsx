import React from 'react'
import Books from '../components/Books'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Courses() {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <div>
          <Books />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Courses