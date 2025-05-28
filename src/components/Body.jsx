import { Outlet } from "react-router"
import Header from "./Header"
import Login from "./Login"

const Body = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Body