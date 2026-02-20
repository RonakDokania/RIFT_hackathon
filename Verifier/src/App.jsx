import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Issuer from "./pages/Issuer";
import Student from "./pages/Student";
import Verifier from "./pages/Verifier";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/issuer" element={<Issuer />} />
        <Route path="/student" element={<Student />} />
        <Route path="/verifier" element={<Verifier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;