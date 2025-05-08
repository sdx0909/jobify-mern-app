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
  // HomeLayout | Landing --> register | login | dashboard
  {
    path: '/',
    element: <HomeLayout/>,
    // attaching the error-page
    errorElement: <Error/>,
    children: [
      { 
        // for attaching the HomeLayout page to Landing 
        // setting "index" page
        index: true,
        element: <Landing/>,
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'dashboard',
        element: <DashboardLayout/>
      },
    ],
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