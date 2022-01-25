import React, { useEffect, useState } from "react";

const Count = () => {
  //whenever the state changes like count,value the reactjs
  //re-renders the component
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  //component did mount, and component did update
  //and its cleanup function will work as cleaning up things
  //like and will execute before execution of next useEffect
  //and its cleanup also work as component did unmount
  //main fuction exe everytime re-renders
  //cleanup function exe everytime before re-rendring of componentdidunmount
  useEffect(() => {
    console.log("it will run everytime componentdidmount+componentdidupdate");
    return () => {
      console.log(
        "cleanup=>work doing during the unmounting such as clear interval or remove db connection and it will execute before the next useEffect"
      );
    };
  }); //no second argumnets

  //componentdidmount
  //cleanup as componentdidumount
  useEffect(() => {
    console.log("it will run only once componentdidmount");
    return () => {
      console.log("cleanup componentdidunmount");
    };
  }, []); //empty array


  //component did mount and component did update with dependencies array 
  //useEffect dependency array whenever the value of the array changes
  //the useEffect will then execute its main function
  useEffect(()=>{
      console.log("everytime when the value changes");
      return ()=>{
          console.log("cleanup for the value changes");
      }
  },[value])

  return (
    <div>
      <h1>you clicked {count} times</h1>
      <button
        onClick={() => {
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        click me
      </button>
      <input type="text" onChange={(e)=>{
            setValue(e.target.value)
      }} value={value} />
    </div>
  );
};

export default Count;
