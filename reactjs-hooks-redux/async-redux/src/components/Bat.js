import React from "react";
import { connect } from "react-redux";

const Bat = (props) => {
  // const [bats,setBats]=useState(50);
  // console.log(props.dispatch)
  // useEffect(()=>{
  //   props.dispatch({type:"BUY_BAT"})
  // },[])

  const { bats, buyBat } = props;

  return (
    <>
      <h1>Remaining bats : {bats}</h1>
      <button onClick={buyBat}>Buy bat</button>
    </>
  );
};

//this below means that we are mapping the state of redux and provding
//the state to props in the below way
//by using this wrapper and closure connect(mapStateToProps)(App);
//incase if we are mapping state to props we are going to get the state
//and as well as the dispatch method but the default dispatch method we are going to get
//but mapDispatchToProps gives us some flexibility
const mapStateToProps = (state) => {
  return {
    bats: state.bat.bats,
  };
}; //use the state

const mapDispatchToProps = (dispatch) => {
  return {
    buyBat: () => {
      dispatch({ type: "BUY_BAT" });
    },
  };
}; //provide some action to modify the state

//if we only need state  connect(mapStateToProps)(App)
//if we only need dispatch connect(undefined/null,mapDispatchToProps)(App)

export default connect(mapStateToProps, mapDispatchToProps)(Bat);
