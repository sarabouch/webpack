// we can import functions here from different files
import { changeColor } from "./homepage.js";
// we link our css file here instead of html
import "./styles/main.css";



function Test(){
    console.log("This is my first webpack");
}
Test();

changeColor("h1", "blue");
