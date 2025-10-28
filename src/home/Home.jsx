import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='flex items-center justify-center gap-5 pt-10'>
<Link to="/registration"><button className='text-bold px-3 py-1 bg-green-700 rounded-md'>Registration</button></Link>
<Link to="/login"><button className='text-bold px-3 py-1 bg-green-700 rounded-md'>Log In</button></Link>
    </div>
  )
}

export default Home
