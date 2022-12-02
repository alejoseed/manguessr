import { useQuery } from "react-query";
import NavBar from "./navBar";
import PlayGame from "./play";

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
  const { data , error, isLoading } = useQuery<manga>("randomManga", CallAPI);
  let mangaName = data?.title;
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center">

        <div className="flex bg-transparent relative flex-col p-6 justify-center space-y-4">            
            <div className="flex max-w-full max-h-full flex-row space-x-4">
                <div className="">
                    <img src={data?.image} alt={data?.title} className="shadow-xl max-w-full max-h-full md:w-[450px] md:h-[650px] scale-75 md:scale-100"/>
                </div>    
            </div>   
        </div>
        <PlayGame title={mangaName!}/>
      </div>
      <div>

      </div>
    </div>
  );
}

export default PrintManga;
