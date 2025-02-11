import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import DashBoard from "./page/DashBoard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
