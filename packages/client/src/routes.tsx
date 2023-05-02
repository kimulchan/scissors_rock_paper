import { Path, RouterProvider, createBrowserRouter } from "react-router-dom";

import * as Page from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page.Home />,
  },
  { path: "/test2", element: <Page.Test2></Page.Test2> },
  { path: "/create", element: <Page.Create /> },
  { path: "/join", element: <Page.Join /> },
  { path: "/battle/:roomId", element: <Page.Battle /> },
  { path: "/result/:roomId", element: <Page.Result /> },
  { path: "/same/:roomId", element: <Page.Same /> },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
