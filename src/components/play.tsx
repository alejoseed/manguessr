import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  useState,
  useEffect,
} from "react";
import { useQuery } from "react-query";
import axios from "axios";

export interface Root {
  result: string
  response: string
  data: Data
}
export interface Data {
  attributes: Attributes
}
export interface Attributes {
  title: Title
  altTitles: AltTitle[]
}
export interface AltTitle {
  ja?: string
  "ja-ro"?: string
}
export interface Title {
  en: string
}

let correctNum : number;

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

// call the api to get the manga title
const CallAPI = async (title: string) => {
  const mangadex =  "https://api.mangadex.org/manga/random?contentRating%5B%5D=safe&contentRating%5B%5D=suggestive"
  + "&contentRating%5B%5D=erotica&includedTagsMode=AND&excludedTagsMode=OR";
  const params = new URLSearchParams();
  params.append('contentRating[]', 'safe');
  params.append('contentRating[]', 'suggestive');
  params.append('contentRating[]', 'erotica');
  params.append('includedTagsMode', 'AND');
  params.append('excludedTagsMode', 'OR');
  correctNum = randomNumber();
  const mangaNames = ["","","",""];

  for (let i = 0; i < 4; i++) {
    if(i !== correctNum){
      await axios.get(mangadex, {params})
        .then((res) => {
          mangaNames[i] = res.data.data.attributes.title.en;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      mangaNames[correctNum] = title;
      console.log(mangaNames[correctNum]);
      continue;
    }
  }
  return mangaNames;
};

function randomNumber() {
  let random = 0;
  random = Math.floor(Math.random() * 4) ;
  console.log(random);
  return random;
}

function handleAnswer(answer : number, manga : number) {
  if (answer === manga) {
    alert("correct");
    // reload the page
    window.location.reload();
  }
  else {
    alert("incorrect");
  }
}

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

  const [manga, setManga] = useState({
    mangaOne: "",
    mangaTwo: "",
    mangaThree: "",
    mangaFour: "",
  });

  useEffect(() => {
    console.log(title);
    CallAPI(title).then((res) => {
      setManga({
        mangaOne: res[0],
        mangaTwo: res[1],
        mangaThree: res[2],
        mangaFour: res[3],
      });
    });
  }, []);

  
  useEffect(() => {
    handleColors(setAllColors);
  }, []);

  return (
      <div className="">
        <div className="flex flex-row space-x-3 pt-3">
          <button className="buttonManga w-full" onClick={() => handleAnswer(correctNum, 0)} style={{ backgroundColor: allColors.colorOne }}>{manga.mangaOne}</button>
          <button className="buttonManga w-full" onClick={() => handleAnswer(correctNum, 1)} style={{ backgroundColor: allColors.colorTwo }}>{manga.mangaTwo}</button>
        </div>
        <div className="flex flex-row space-x-3 pt-3">
          <button className="buttonManga w-full" onClick={() => handleAnswer(correctNum, 2)} style={{ backgroundColor: allColors.colorThree }}>{manga.mangaThree}</button>
          <button className="buttonManga w-full" onClick={() => handleAnswer(correctNum, 3)} style={{ backgroundColor: allColors.colorFour }}>{manga.mangaFour}</button>
        </div>
      </div>
  );
}


export default PlayGame;
