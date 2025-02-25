import { Link } from "react-router-dom"

const MainNavigation = () => {
  return (
    <nav>
      <Link to='/' style={{ marginRight: '10px' }}>
        Home
      </Link>
      <Link to='/products'>Products</Link>
    </nav>
  )
}

export default MainNavigation
