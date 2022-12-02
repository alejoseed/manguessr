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
  // create random array of numbers
  let random = [];
  for (let i = 0; i < 4; i++) {
    random.push(Math.floor(Math.random() * 4));
  }
  return random;
}

/*function handleResult(
  a: number,
  b: number,
  score: number,
  setScore: any,
  highScore: number,
  setHighScore: any,
  setAllColors: any,
  setWinner: any
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
}*/

function handleColors(setAllColors: any) {
  let color = GetRandomColor();
  setAllColors({
    colorOne: color[0],
    colorTwo: color[1],
    colorThree: color[2],
    colorFour: color[3],
  });
  return setAllColors;
}

function PlayGame({title} : {title: string}){
  const [allColors, setAllColors] = useState({
    colorOne: "",
    colorTwo: "",
    colorThree: "",
    colorFour: "",
  });
  // get random colors only if allColors is empty
  if (allColors.colorOne === "") {
    handleColors(setAllColors);
  }
  // the title of the manga is passed in as a prop, set it to a state
  const [mangaTitle, setMangaTitle] = useState(title);

  return (
    <div className="p-2">
      <div>
        <div className="flex flex-row space-x-3 pt-3">
          <button className="buttonManga" style={{ backgroundColor: allColors.colorOne }}>{title}</button>
          <button className="buttonManga" style={{ backgroundColor: allColors.colorTwo }}>{randomNumber()}</button>
        </div>
        <div className="flex flex-row space-x-3 pt-3">
          <button className="buttonManga" style={{ backgroundColor: allColors.colorThree }}>{randomNumber()}</button>
          <button className="buttonManga" style={{ backgroundColor: allColors.colorFour }}>{randomNumber()}</button>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
