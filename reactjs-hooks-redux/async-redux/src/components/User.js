import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      let data = res.data;
      setUser(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if(error){
      return <h1>some error occured...</h1>
  }
  return (
      <>
      {user.map((user)=>{
        return  <h1 key={user.id}>{user.name}</h1>
      })}
      </>
  );
};

export default User;
