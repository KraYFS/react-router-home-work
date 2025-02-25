import { Link } from 'react-router-dom'
import { productsId } from '../../data'

const Products = () => {
  return (
    <div>
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
