import { randomBytes } from "crypto";
import NavBar from "./navBar";

function GetColor(){
    let r,g,b
    
    r = Math.random() % 225
    console.log(r)
    return r
}
// This function will get a random panel and assign it a number. Maybe?
function Panels(){

}
function PlayGame () {
    return(
        <div>
            <NavBar/>
            <div className="flex flex-col justify-center items-center h-screen">
                This is a fun game
                <div className="bg-red-500 w-20 h-20">{GetColor()}</div>
            </div>
        </div> 
    );
}  

export default PlayGame