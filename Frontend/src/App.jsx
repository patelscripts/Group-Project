import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import LoginPage from "./pages/LoginPage"

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Header/>}/>       
        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>

  )
}

export default App
