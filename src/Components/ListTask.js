import React from "react";
import { FcApprove, FcBadDecision, FcDecision } from "react-icons/fc";

import { useDispatch } from "react-redux";
const ListTask = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        // display: "flex",
        // // flexWrap: "wrap",
        // // alignItems: "center",
        // justifyContent: "space-around",
        // width: "160px",
        // // marginLeft: "215px",
        fontSize: "30px",
      }}
    >
      <span onClick={() => dispatch({ type: "show", payload: "done" })}>
        <FcApprove size={45} />
      </span>
      <span onClick={() => dispatch({ type: "show", payload: "undone" })}>
        <FcBadDecision size={45} />
      </span>
      <span onClick={() => dispatch({ type: "show", payload: "all" })}>
        <FcDecision size={45} />
      </span>
    </div>
  );
};

export default ListTask;
