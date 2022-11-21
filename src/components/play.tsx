import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  useState,
} from "react";
import NavBar from "./navBar";

function GetRandomColor() {
  let color = "#";
  // Get a rnadom number between 41 and 90
  let r = Math.floor(Math.random() * (90 - 41 + 1) + 41).toString(16);
  let g = Math.floor(Math.random() * (90 - 41 + 1) + 41).toString(16);
  let b = Math.floor(Math.random() * (90 - 41 + 1) + 41).toString(16);
  color += r;
  color += g;
  color += b;
  return color;
}

function PlayGame() {
  const [color, setColor] = useState("");
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen">
        This is a fun game
        <div>
          <div>
            <div className="flex h-52 w-52 flex-col justify-between items-center">
              <button
                className="rounded-md bg-blue-400"
                onClick={() => setColor(GetRandomColor)}
              >Click to change the icon</button>
              <div
                className="h-40 w-40"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
