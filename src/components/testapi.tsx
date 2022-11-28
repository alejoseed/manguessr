import { useQuery } from "react-query";
import NavBar from "./navBar";
import React from "react";

interface Root {
  message: string;
  number: number;
}

const CallAPI = async () => {
  const res = await fetch("http://localhost:3000/api");
  return res.json();
};

function PrintAMessage() {
  
  const { data, error, isLoading, refetch } = useQuery<Root>("message", CallAPI);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <button onClick={() => refetch()}>Refresh</button>
      <p>The value of the data {data?.message} {data?.number}</p>
    </div>
  );
}

export default PrintAMessage;
