import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { FcAddRow } from "react-icons/fc";

const Addtask = () => {
  const dispatch = useDispatch();
  const [description, setdescription] = useState("");
  const addfighter = () => {
    if (description.trim && description !== "") {
      dispatch({
        type: "add",
        payload: { id: uuidv4(), description, isdone: false, edit: false },
      });
      setdescription("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={description}
        placeholder="enter new fighter"
        onChange={(e) => setdescription(e.target.value)}
      />
      <span onClick={addfighter}>
        <FcAddRow size={30} />
      </span>
    </div>
  );
};

export default Addtask;
