import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div>
      <nav>Navbar</nav>
      {/* this is for childrens */}
      <Outlet />
    </div>
  )
}
export default HomeLayout