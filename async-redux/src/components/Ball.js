import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBall } from "../redux/ballActions";

const Ball = (props) => {
  const [value, setValue] = useState(props.balls);
  const { balls, buyBall, sellBall } = props;
  return (
    <>
      <h1>remaining balls: {balls}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={()=>buyBall(value)}>buy ball</button>
      <button onClick={()=>sellBall(value)}>sell ball</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    balls: state.ball.balls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBall: (qty) => {
      dispatch(buyBall(qty));
    },
    sellBall: (qty) => {
      dispatch({ type: "SELL_BALL", payload: Number(qty) });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
