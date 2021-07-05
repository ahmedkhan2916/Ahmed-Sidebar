import Sidebar from "./Sidebar_component";
import "./App.css"
import "./sidebar.css"
import {useState} from "react";
function App() {

  const [data,setData]=useState("Click on any menu item....");
  return (
    <div className="App">
        <Sidebar Setdata={setData}/>
        <h1 className="heading">{data}</h1>
     
     </div>
  );
}

export default App;
