import React, { useEffect, useState } from "react";
import Example from "./functional/Count";
const App = () => {
    const [state,setState]=useState(true);

    //everytime after the component finshes mount
    //that why the App.js useEffect at initial render is showing at the last
    //and the Count.js useEffects are executing first before they are been mounting first
    //and useEffect exe after the mounts afrer count.js mounts then the App.js 
    //will be able to complete its mounting therefore thats why the useEffect present
    //in the parent component will exe at last
    useEffect(()=>{
        console.log("App.js useEffect")
    })
      return (
    <>
      {state ? <Example></Example> : <></>}
      <button onClick={()=>setState(!state)}>remove component</button>
    </>
  );
};

export default App;
