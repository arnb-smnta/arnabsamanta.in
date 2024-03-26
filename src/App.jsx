import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
