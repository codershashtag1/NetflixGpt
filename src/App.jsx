import Body from "./components/Body"
import { BrowserRouter, Routes, Route } from "react-router"
import Login from "./components/Login"
import Browse from "./components/Browse"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {

  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
