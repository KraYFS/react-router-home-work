import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { productsId } from '../../data'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = productsId.find(item => item.id === Number(id))

  return (
    <div>
      <nav>
        <Link to='/' style={{ marginRight: '10px' }}>
          Home
        </Link>
        <Link to='/products'>Products</Link>
      </nav>
      {product ? (
        <>
          <h1>Product detail</h1>
          <div>{product.id}</div>
        </>
      ) : (
        <h1>Product not found</h1>
      )}
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  )
}

export default Product
