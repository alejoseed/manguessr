// Fetch a message 

import { useQuery } from "react-query";
import NavBar from "./navBar";

export interface Root {
  icon_url: string
  id: string
  url: string
  value: string
}

function PrintMessage() {
  const getJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    return res.json();
  };
  
  // Use the useQuery hook to fetch the data using the interface Root
  const {data, error, isLoading} = useQuery<Root>('randomFacts', getJoke);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Random Chuck Norris Quote</h1>
        <p>{data?.value}</p>
      </div>
    </div>
  );
}

export default PrintMessage;
