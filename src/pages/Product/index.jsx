import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <nav>
        <Link to='/' style={{ marginRight: '10px' }}>
          Home
        </Link>
        <Link to='/products'>Products</Link>
      </nav>
      <h1>Product detail</h1>
      <h3>{id}</h3>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
}

export default Product
