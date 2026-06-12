import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <div className='hero-notfound'>
        <div className='container text-center mt-5'>
          <h1>Something went wrong</h1>
          <Link to="/Homepage">
            <button className='btn btn-warning'>COME BACK 'HOME'</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound