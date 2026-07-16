import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Products from '../pages/products/ProductsPages';

import NotFound from '../pages/NotFound';
import MainLayout from '../layouts/Mainlayouts';
import ProductDetails from '../components/ui/products/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: "<Cart />",
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;