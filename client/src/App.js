import {BrowserRouter, Routes,Route} from "react-router-dom";
import Symposium from "./Symposium";
import Add from "./Add";

function App() {
  return(
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Symposium/>}/>
      <Route path="/1" element={<Add/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;


