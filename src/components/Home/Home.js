import React from 'react'
import logo from '../../images/fig.png'

const Home = () => {
  return (
    <section className="h-100 d-flex flex-column justify-content-center align-items-center" >
      <h1> Friends of Fig </h1>
      <img src={logo} className="img-fluid" alt="Fig Logo"/>
      <p className='text-center '>
        This is the place for all things Fig. Here you can find everything you need to know to take care of the most perfect boy in the world.
      </p>
    </section>
  )
}

export default Home;