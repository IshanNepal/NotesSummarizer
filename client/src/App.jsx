import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./Pages/HomePage"

function App() {


  return (
    <>
     <Toaster 
     position="top-center"
     reverseOrder={false}
     />
     <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage/>}></Route>
      </Route>
     </Routes>
    </>
  )
}

export default App
