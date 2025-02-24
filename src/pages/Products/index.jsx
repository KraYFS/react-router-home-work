import { Link } from 'react-router-dom'
import { productsId } from '../../data'

const Products = () => {
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
          <h3 key={id}>
            <Link to={`${id}`}>Product {id}</Link>
          </h3>
        )
      })}
    </div>
  )
}

export default Products
