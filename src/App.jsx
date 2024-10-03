import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Add from "./Pages/Add"
import View from "./Pages/View"
import Edit from "./Pages/Edit"
import './App.css'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Add/>}></Route>
            <Route path="/view" element={<View/>}></Route>
            <Route path="/edit" element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
