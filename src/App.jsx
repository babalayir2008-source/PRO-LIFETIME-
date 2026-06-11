import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contactus } from "./Pages/Contactus"  
import { Collection }  from "./Pages/Collection"
import { Navbar } from "./components/Navbar"
import { CustomWatch } from "./Pages/CustomWatch"
import {Routes,Route } from "react-router-dom"
function App() {
 
  return (
    <div>
    <Navbar/>
    <footer/>
    
  
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contactus/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/custom" element={<CustomWatch/>}/>
         
      </Routes>
      
     
    </div>
  )
}


export default App


