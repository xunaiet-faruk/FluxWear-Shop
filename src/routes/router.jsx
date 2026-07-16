import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import ProductsPages from "../pages/products/ProductsPages";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: ProductsPages,
      },
      {
        path: "products/:id",
        Component: "ProductDetails",
      },
      {
        path: "cart",
        Component: "Cart",
      },
    ],
  },
  {
    path: "*",
    Component: "NotFound",
  },
]);

export default router;