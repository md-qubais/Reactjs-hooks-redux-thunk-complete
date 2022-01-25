import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/userActions";

const User = (props) => {
  // const [user, setUser] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);

  // useEffect(async () => {
  //   try {
  //     let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     let data = res.data;
  //     setUser(data);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err);
  //   }
  // });
  const { loading, error, user, fetchUsers } = props;

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>some error occured...</h1>;
  }
  return (
    <>
      {user.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
