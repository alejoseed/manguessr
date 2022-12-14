import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  useState,
} from "react";
import { useQuery } from "react-query";

let showResult = false;

function GetRandomColor() {
  // Array to store the generated colors
  let color = ["#", "#", "#", "#"];

  // Loop to generate hex color code
  for (let i = 0; i < color.length; i++) {
    let tmp = Math.floor(Math.random() * 16777215).toString(16);
    color[i] += tmp;
  }
  return color;
}

function randomNumber() {
  // Get a random number and return the index between 1 and 4
  let random = Math.floor(Math.random() * 4);
  return random;
}

function handleResult(a: number, b: number, score: number,setScore: any,
  highScore: number, setHighScore: any, setAllColors: any,setWinner: any
) {

  showResult = true;

  if (score > highScore) {
    setHighScore(score);
  }
  
  if (a === b) {
    setScore(score + 1);
    handleClick(setAllColors, setWinner);
    return "correct";
  } else {
    setScore(0);
    handleClick(setAllColors, setWinner);
    return "wrong";
  }
}

function handleClick(setAllColors: any, setWinner: any) {
  let color = GetRandomColor();
  setAllColors({
    colorOne: color[0],
    colorTwo: color[1],
    colorThree: color[2],
    colorFour: color[3],
  });
  setWinner(randomNumber);
  return setAllColors;
}

function PlayGame() {
  const [allColors, setAllColors] = useState({
    colorOne: "",
    colorTwo: "",
    colorThree: "",
    colorFour: "",
  });
  const [winner, setWinner] = useState(0);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="p-2">
          <div>
            <p>Select a button </p> <p>Score: {score}</p>{" "}
            <p>Highscore: {highScore}</p>
            <div className="flex flex-row space-x-3 pt-3">
              <button
                className="h-12 w-12 rounded-md shadow-mdhover:duration-100 hover:-translate-y-3"
                onClick={() =>
                  setResult(
                    handleResult(
                      1,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      setWinner
                    )
                  )
                }
                style={{ backgroundColor: allColors.colorOne }}
              >
                1
              </button>
              <button
                className="h-12 w-12 rounded-md shadow-md hover:duration-100 hover:-translate-y-3"
                onClick={() =>
                  setResult(
                    handleResult(
                      2,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      setWinner
                    )
                  )
                }
                style={{ backgroundColor: allColors.colorTwo }}
              >
                2
              </button>
              <button
                className="h-12 w-12 rounded-md shadow-md hover:duration-100 hover:-translate-y-3"
                onClick={() =>
                  setResult(
                    handleResult(
                      3,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      setWinner
                    )
                  )
                }
                style={{ backgroundColor: allColors.colorThree }}
              >
                3
              </button>
              <button
                className="h-12 w-12 rounded-md shadow-md hover:duration-100 hover:-translate-y-3" 
                onClick={() =>
                  setResult(
                    handleResult(
                      4,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      setWinner
                    )
                  )
                }
                style={{ backgroundColor: allColors.colorFour }}
              >
                4
              </button>
            </div>
            {showResult && 
            <div>You click the {result} button</div>}
          </div>
    </div>
  );
}

export default PlayGame;




