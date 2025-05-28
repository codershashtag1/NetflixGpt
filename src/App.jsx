import Body from "./components/Body"
import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./components/Login"
import Browse from "./components/Browse"

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
