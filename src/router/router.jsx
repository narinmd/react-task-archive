import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import CategoryPage from "../pages/CategoryPage";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../pages/ErrorPage";
import GetLocation from "../components/GetLocation";
import CategoryPageAPI from "../pages/CategoryPageAPI";
import FormUseState from "../components/Form/FormUseState";
import FormUseRef from "../components/Form/FormUseRef";
import FormFormData from "../components/Form/FormFormData";
import FormUseAction from "../components/Form/FormUseAction";
import FormLogin from "../components/Form/FormLogin";
import Board from "../components/XO/Board/Board";
import Parent from "../components/why use context/Parent";
import FormLayout from "../layouts/FormLayout";
import ProductPageAPI from "../pages/ProductPageAPI";
import Cart from "../components/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/aboutus",
      //   element: <AboutUsPage />,
      // },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/product/:productId/:productName",
        element: <ProductPage />,
      },
      {
        path: "/category-api",
        element: <CategoryPageAPI />,
      },
      {
        path: "/product-api/:productId/:productName",
        element: <ProductPageAPI />,
      },
      {
        path: "/getlocation",
        element: <GetLocation />,
      },
      {
        path: "/form-usestate",
        element: <FormUseState />,
      },
      {
        path: "/form-useref",
        element: <FormUseRef />,
      },
      {
        path: "/form-formdata",
        element: <FormFormData />,
      },
      {
        path: "/form-useaction",
        element: <FormUseAction />,
      },
      {
        path: "/xo-game",
        element: <Board />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <div>Test</div>,
      },
    ],
  },
  {
    path: "/form",
    element: <FormLayout />,
    children: [
      {
        path: "/form",
        element: <FormLogin />,
      },
    ],
  },
]);
