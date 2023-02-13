import { createBrowserRouter } from "react-router-dom";
import ProductCard from "../../Component/Shop/Products/ProductCard";
import ProductHorizontalCard from "../../Component/Shop/Products/ProductHorizontalCard";
import Register from "../../Pages/Register/Register";
import Shop from "../../Pages/Shop/Shop";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/signIn",
        element: <Register />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            path: "/shop/grid",
            element: <ProductCard />,
          },
          {
            path: "/shop/list",
            element: <ProductHorizontalCard />,
          },
        ],
      },
    ],
  },
]);
export default router;
