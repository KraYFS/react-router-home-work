import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <h1>Home</h1>
      <h3>
        Go to <Link to='/products'>Products</Link>
      </h3>
    </div>
  )
}

export default Main
