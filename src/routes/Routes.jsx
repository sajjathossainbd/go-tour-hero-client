import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateTouristsSpot from "../pages/UpdateTouristsSpot";
import TouristsSpotDetails from "../pages/TouristsSpotDetails";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://go-tour-hero-server.vercel.app/tourists-spot"),
      },
      {
        path: "/all-tourists-spot",
        element: <AllTouristsSpot />,
        loader: () =>
          fetch("https://go-tour-hero-server.vercel.app/tourists-spot"),
      },
      {
        path: "/add-tourists-spot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tourists-spot-list/:email",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://go-tour-hero-server.vercel.app/tourists-spot/${params.email}`
          ),
      },
      {
        path: "/tourists-spot-details/:id",
        element: (
          <PrivateRoute>
            <TouristsSpotDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://go-tour-hero-server.vercel.app/tourists-spot-id/${params.id}`
          ),
      },
      {
        path: "/update-tourists-spot/:id",
        element: (
          <PrivateRoute>
            <UpdateTouristsSpot />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://go-tour-hero-server.vercel.app/tourists-spot-id/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
