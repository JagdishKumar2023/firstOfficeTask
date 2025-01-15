import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Layout from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing-page" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
