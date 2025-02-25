import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'

const Main = React.lazy(() => import('../pages/Main'))
const Products = React.lazy(() => import('../pages/Products'))
const Product = React.lazy(() => import('../pages/Product'))

const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>wait...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      { path: '/', element: <Main /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <Product /> }
    ],
    errorElement: 'Page not found'
  }
])

export default Router
