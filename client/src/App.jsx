// creating the React-Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import HomeLayout from "./pages/HomeLayout"
// instead of above we use following approch
import {
  HomeLayout,
  DashboardLayout,
  Landing,
  Register,
  Login,
  Error
} from "../src/pages"
// todo : this is not better approach


// creating the route for handling the api's
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>
  },
])
// creting the App Component
function App() {
  return (
    // setting up the router
    <RouterProvider router={router}/>
  )
};

export default App