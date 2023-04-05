import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Root from "./Pages/Root";
import Error from "./Pages/Error";
import ProductDetail from "./Pages/ProductDetail";





const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        // index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />
      }
    ]
  },

])

// an alternative way of routing 

// const routeDefinition = createRoutesFromElements([
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='products' element={<Products />} />
//   </Route>
// ])

// const router = createBrowserRouter(routeDefinition)
function App() {

  return (<RouterProvider router={router} />)
}

export default App;
