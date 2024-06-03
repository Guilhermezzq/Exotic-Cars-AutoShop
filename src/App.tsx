
// Criando as rotas para cada componente da página

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { Home } from "./pages/home/home";
import { Detail } from "./pages/detail/detail";
import { Dashboard } from "./pages/dashboard/dashboard";
import { NewCars } from "./pages/dashboard/newcars/newcars";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Private } from "./routes/private";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car/:id",
        element: <Detail />,
      },
      {
        path: "/dashboard",
        element: <Private> <Dashboard /> </Private>,
      },
      {
        path: "/dashboard/newcars",
        element: <Private> <NewCars /> </Private>,
      }
    ]
  },

  // Login e cadastro/registro fora da página 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  
])

export { router };

