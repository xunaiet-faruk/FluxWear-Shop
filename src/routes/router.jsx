import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";


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
        Component: "Products",
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