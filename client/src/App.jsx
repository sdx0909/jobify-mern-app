// creating the React-Router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLayout from "./pages/HomeLayout"

// creating the route for handling the api's
const router = createBrowserRouter([
  {
    // for root api
    path: '/',
    // element: <h1>Home</h1>
    element: <HomeLayout/>
  },
  {
    // for about api
    path: '/about',
    element: 
      <div>
        <h1>About Page</h1>
      </div>
  }
])
// creting the App Component
function App() {
  return (
    // setting up the router
    <RouterProvider router={router}/>
  )
};

export default App