import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <nav>
        <Link to='/' style={{ marginRight: '10px' }}>
          Home
        </Link>
        <Link to='/products'>Products</Link>
      </nav>
      <h1>Home</h1>
      <h3>
        Go to <Link to='/products'>Products</Link>
      </h3>
    </div>
  )
}

export default Main
