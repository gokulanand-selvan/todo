import "./App.css";
import { Todo } from "./todoFuncuntion";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignuUP";
import "./todoStyle.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Bottom from "./components/Bottom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
