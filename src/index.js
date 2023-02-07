import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import ProtectedRoute from 'pages/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, path: '/', element: <Home/> },
      { path: '/product', element: <AllProducts/> },
      { path: '/product/new', element: <NewProduct/> },
      { path: '/product/:id', element: <ProductDetail/> },
      { path: '/cart', element: <ProtectedRoute><MyCart/></ProtectedRoute> },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
