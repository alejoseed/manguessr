import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  useState,
} from "react";
import NavBar from "./navBar";

function GetRandomColor() {
  let color = ["#", "#", "#", "#"];
  // Get a rnadom number between 41 and 90
  for (let i = 0; i < color.length; i++) {
    let tmp = Math.floor(Math.random() * 16777215).toString(16);
    color[i] += tmp;
  }
  return color;
}

function randomNumber() {
  let number = [1, 2, 3, 4];
  let random = Math.floor(Math.random() * 4);
  return number[random];
}

function handleWinner(a: number, b: number, score: number,setScore: any,
  highScore: number, setHighScore: any, setAllColors: any, isClicked: any,
  setWinner: any
) {

  if (score > highScore) {
    console.log(score, highScore);
    setHighScore(score);
  }
  
  if (a === b) {
    setScore(score + 1);
    handleClick(setAllColors, isClicked, setWinner);
    return "correct";
  } else {
    setScore(0);
    handleClick(setAllColors, isClicked, setWinner);
    return "wrong";
  }
}

function handleClick(setAllColors: any, isClicked: any, setWinner: any) {
  let color = GetRandomColor();
  setAllColors({
    colorOne: color[0],
    colorTwo: color[1],
    colorThree: color[2],
    colorFour: color[3],
  });
  setWinner(randomNumber);
  isClicked(true);
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
  const [clicked, isClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen">
        This is a fun game
        <button
          className="rounded-md bg-blue-400"
          onClick={() => handleClick(setAllColors, isClicked, setWinner)}
        >
          Click to change the color
        </button>
        {clicked && (
          <div>
            <p>Select a button </p> <p>Score: {score}</p>{" "}
            <p>Highscore: {highScore}</p>
            <div className="flex flex-row space-x-3 pt-3">
              <button
                className="h-12 w-12 rounded-md shadow-mdhover:duration-100 hover:-translate-y-3"
                onClick={() =>
                  setResult(
                    handleWinner(
                      1,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      isClicked,
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
                    handleWinner(
                      2,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      isClicked,
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
                    handleWinner(
                      3,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      isClicked,
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
                    handleWinner(
                      4,
                      winner,
                      score,
                      setScore,
                      highScore,
                      setHighScore,
                      setAllColors,
                      isClicked,
                      setWinner
                    )
                  )
                }
                style={{ backgroundColor: allColors.colorFour }}
              >
                4
              </button>
            </div>
            <div>You click the button {result}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayGame;
