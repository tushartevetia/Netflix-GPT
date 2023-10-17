import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PlayMovie from "./PlayMovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
      element: <PlayMovie />,
    },
  ]);

  return (
    <div className="bg-black z-20">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
