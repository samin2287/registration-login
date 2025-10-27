import { BrowserRouter,Routes,Route } from "react-router"
import LogIn from "./components/LogIn"
import Registration from "./components/Registration"
import Home from "./home/Home"



function App() {


  return (
   <div>


<BrowserRouter>
<Routes>


<Route index element={<Home/>}   />
<Route path="/registration" element={<Registration/>}   />
<Route path="/login" element={<LogIn/>}   />

</Routes>

</BrowserRouter>

 



   </div>
  )
}

export default App
