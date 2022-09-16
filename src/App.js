import "./App.css";
import { Todo } from "./todoFuncuntion";
import "./todoStyle.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
