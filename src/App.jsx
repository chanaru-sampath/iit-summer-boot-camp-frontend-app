import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import Home from "./pages/home/Home"
import "./App.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
