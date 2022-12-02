import { useQuery } from "react-query";
import NavBar from "./navBar";
import PlayGame from "./play";
import axios from "axios";
import { useEffect, useState } from "react";

interface manga {
  image: string;
  title: string;
}

const CallAPI = async () => {
  const res = await fetch("http://localhost:3000/random_image");
  return res.json();
};


function PrintManga() {
  // axios call to the mangaAPI
  const { data, error, isLoading } = useQuery<manga>("randomManga", CallAPI);
  const [mangaName, setMangaName] = useState("");
  useEffect(() => {
    if (data) {
      setMangaName(data.title);
    }
  }, [data]);
  

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex bg-transparent relative flex-col p-6 justify-center space-y-4">
          <div className="flex max-w-full max-h-full flex-col items-center space-x-4">
              <img src={data?.image} alt="manga" className="mangaBox" />
              {mangaName && <PlayGame title={mangaName} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintManga;
