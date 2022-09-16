import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListName from "./todoAdd";
import bgImage from "./images/task.jpg";
import { WiMoonAltThirdQuarter } from "react-icons/wi";



let blackLight = {
  title: "black",
  bg: "black",
  text: "white",
};

let whiteLight = {
  title: "white",
  bg: "white",
  text: "black",
};


export function Todo() {
  let [task, setTask] = useState("");
  let [arr, setArr] = useState([]);
  let [mode, setMode] = useState(blackLight);

  const fetchList = () => {
    const requestOptions = {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    }

    fetch('https://ragu-hotel-api.herokuapp.com/api/todo', requestOptions)
      .then(response => response.json())

      .then(data => setArr((data)));

  }

  useEffect(() => {
    fetchList();
  }, []);

  const onAdd = () => {
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: task })
    }

    fetch('https://ragu-hotel-api.herokuapp.com/api/todo', requestOptions)
      .then(response => response.json())
      .then(data => fetchList())
  }

  // const onClickDelete = () => {
  //   const requestOptions = {
  //     method: "DELETE",
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ data: arr.id })
  //   }
  //   fetch('https://ragu-hotel-api.herokuapp.com/api/todo/${_id}', requestOptions)
  //     .teh(response => response.json)
  //     .then(data => fetchList())
  // }


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
              style={{ backgroundColor: mode.bg, color: mode.text }}
            />
            <button
              id="butt"
              onClick={() => {
                // setArr([task, ...arr]);
                setTask("");
                onAdd()
              }}
            >
              Add
            </button>
            <WiMoonAltThirdQuarter
              id="themeButton"
              size={40}
              onClick={() => {
                if (mode.title === "black") {
                  setMode(whiteLight);
                } else {
                  setMode(blackLight);
                }
              }}
            />
          </div>
        </div>
        <div className="setarray" style={{ backgroundColor: mode.bg }}>
          {arr.map((list, index) => {
            // console.log(list);
            return (
              <ListName list={list} key={index} arr={arr} fetchList={fetchList} />
            )
          })}
        </div>
      </div>
    </>
  );
}