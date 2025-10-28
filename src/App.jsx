import { BrowserRouter,Routes,Route } from "react-router"
import LogIn from "./components/LogIn"
import Registration from "./components/Registration"
import Home from "./home/Home"
import RegisteredUser from "./home/RegisteredUser"
function App() {
  return (
   <div>
<BrowserRouter>
<Routes>
<Route index element={<Home/>}   />
<Route path="/registration" element={<Registration/>}   />
<Route path="/login" element={<LogIn/>}   />
<Route path="/registeredUser" element={<RegisteredUser/>}   />

</Routes>

</BrowserRouter>

   </div>
  )
}

export default App
