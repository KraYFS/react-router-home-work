import { Link } from 'react-router-dom'

const Products = () => {
  const productsId = [{ id: 1 }, { id: 2 }, { id: 3 }]
  return (
    <div>
      <nav>
        <Link to='/' style={{ marginRight: '10px' }}>
          Home
        </Link>
        <Link to='/products'>Products</Link>
      </nav>
      <h1>Products</h1>
      {productsId.map(({ id }) => {
        return (
          <h3>
            <Link to={`${id}`}>Product {id}</Link>
          </h3>
        )
      })}
    </div>
  )
}

export default Products
