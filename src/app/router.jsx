import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Main = React.lazy(() => import('../pages/Main'))
const Products = React.lazy(() => import('../pages/Products'))
const Product = React.lazy(() => import('../pages/Product'))

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>wait</div>}>
        <Main />
      </Suspense>
    ),
    errorElement: 'Page not found'
  },
  {
    path: '/products/:id',
    element: (
      <Suspense fallback={<div>wait</div>}>
        <Product />
      </Suspense>
    )
  },
  {
    path: '/products',
    element: (
      <Suspense fallback={<div>wait</div>}>
        <Products />
      </Suspense>
    )
  }
])

export default Router
