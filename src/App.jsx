import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Form from "./pages/form.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Profile from './pages/profile.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
    </Routes>
  );
}

export default App;
