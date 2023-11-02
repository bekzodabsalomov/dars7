import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from './pages/Contact'
import Main from './pages/Main'
import ErrorPages from "./pages/ErrorPage";

function App() {
  const roots = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPages/>,
      children:[
        {
          index: true,
          element: <Main/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: "about",
          element: <About />,
        },
      ]
    },
   
  ]);
  return <RouterProvider router={roots} />;
}

export default App;