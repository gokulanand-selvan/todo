import React from "react";
import { useState } from "react";
import ListName from "./todoAdd";
import bgImage from "./images/task.jpg";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

let blackLight = {
  bg: "black",
};

let whiteLight = {
  bg: "white",
};

function Todo() {
  let [task, setTask] = useState("");
  let [arr, setArr] = useState([]);

  let [mode, setMode] = useState({
    bg: "black",
    text: "white",
  });

  let [theme, setTheme] = useState("light");

  return (
    <>
      <div className="main" style={{ backgroundColor: mode.bg }}>
        <div
          className="ip"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "100% 107%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <input
              id="textbox"
              type={"text"}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter the  Task"
              style={{ backgroundColor: mode.bg }}
            />
            <button
              id="butt"
              onClick={() => {
                setArr([task, ...arr]);
                setTask("");
              }}
            >
              Add
            </button>

            <WiMoonAltThirdQuarter
              id="themeButton"
              size={40}
              onClick={() => {
                setMode(theme === "dark" ? blackLight : whiteLight);
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
          </div>
        </div>
        <div className="setarray" style={{ backgroundColor: mode.bg }}>
          {arr.map((list, index) => (
            <ListName list={list} setArr={setArr} key={index} arr={arr} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Todo;
