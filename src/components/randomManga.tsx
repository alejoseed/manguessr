import { useQuery } from "react-query";
import { useState} from "react";

import NavBar from "./navBar";

function PrintManga() {

  return (

    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center h-screen">

        <div className="flex relative flex-col justify-center space-y-4">

            <div className="flex flex-row shadow-xl space-x-4">
                <div className="w-96 h-96">
                    <img src="http://localhost:3000/random_image"  alt="" className="h-full w-full"/>
                </div>
                <div className="w-96 h-96">
                    <img src="http://localhost:3000/random_image" alt="" className="h-full w-full"/>
                </div>           
            </div>   

            <div className="flex flex-row shadow-xl space-x-4">
                <div className="w-96 h-96">
                    <img src="http://localhost:3000/random_image" alt="" className="h-full w-full"/>
                </div>
                <div className="w-96 h-96">
                    <img src="http://localhost:3000/random_image" alt="" className="h-full w-full"/>
                </div>
            </div>
                
        </div>
      </div>
      <p>This is a paragraph</p>
    </div>
  );
}

export default PrintManga;
