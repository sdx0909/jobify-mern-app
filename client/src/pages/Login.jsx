import { Link } from "react-router-dom"
function Login() {
  return (
    <div>
      <h1>Login </h1>
      {/* Link is worked with only page */}
      <Link to="/register">Register Page</Link>
    </div>
  )
}
export default Login