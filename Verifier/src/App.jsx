import { BrowserRouter, Routes, Route } from "react-router-dom";
import Issuer from "./pages/Issuer.jsx";
import Student from "./pages/Student.jsx";
import Verifier from "./pages/Verifier.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ only here */}

      <Routes>
        <Route path="/" element={<Issuer />} />
        <Route path="/student" element={<Student />} />
        <Route path="/verifier" element={<Verifier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
