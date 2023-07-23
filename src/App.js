import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board/Board";
import Editable from "./components/Editable/Editable";
import { useState } from "react";
import Sidebar from "./components/Sidebar/sidebar";


function App() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "card 1",
          tasks: [],
          lables: [
            {
              text: "frontend",
              color: "blue",
            },
          ],
          desc: "sfsfsfdfsf",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "card 2",
          tasks: [],
          lables: [
            {
              text: "backend",
              color: "brown",
            },
          ],
          desc: "sfsfsfdfsf",
          date: "",
        },
      ],
    },
  ]);

  return (
    <div>
      <div className="sideBar">

      <Sidebar />
      {/* <NavBar /> */}
      </div>

      <div className="App">
        <div className="app_navbar">
          <h1>kanban</h1>

          {/* <Search />
          <SecondBar /> */}
        </div>
        <div className="app_outer">
          <div className="app_boards">
            {boards.map((item) => (
              <Board key={item.id} board={item} />
            ))}

            {/* <Board />
          <Board /> */}
            <div className="app_boards_board">
              <Editable
                displayClass="app_boards_board_add"
                text="Add Board"
                placeholder="Enter board title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
