import { useState } from "react";
import { FcDeleteRow } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Addtask from "./Components/Addtask";
import ListTask from "./Components/ListTask";

function App() {
  const datas = useSelector((state) => state.datas);
  const shown = useSelector((state) => state.shown);
  const dispatch = useDispatch();
  const [newdescription, setnewdescription] = useState("");

  const delfighter = (id) => {
    dispatch({ type: "delete", payload: id });
  };
  const checktask = (id) => {
    dispatch({ type: "check", payload: id });
  };
  const changedit = (id) => {
    dispatch({ type: "update", payload: id });
  };
  const newdesc = (id) => {
    if (newdescription.trim && newdescription !== "") {
      dispatch({
        type: "newadd",
        payload: { id: id, description: newdescription },
      });
    } else dispatch({ type: "changebut", payload: id });
  };
  const filter = () => {
    if (shown == "done") {
      return datas.filter((data) => data.isdone == true);
    }
    if (shown == "undone") {
      return datas.filter((data) => data.isdone == false);
    }
    if (shown == "all") {
      return datas;
    }
  };
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="App">
      <p>ToDo Application</p>
      <Addtask />
      <ListTask />
      <span className="boxx">
        {filter().map((data, i) => {
          return (
            <div className="box">
              <table>
                <tr>
                  <td style={{ width: "300px", height: "32px" }}>
                    {data.edit == false ? (
                      <span onClick={() => checktask(data.id)}>
                        {data.description}
                      </span>
                    ) : (
                      <input
                        style={{
                          width: "296px",
                          height: "22px",
                          border: "none",
                          outline: "none",
                          textAlign: "center",
                        }}
                        type="text"
                        placeholder={data.description}
                        onChange={(e) => setnewdescription(e.target.value)}
                      />
                    )}
                  </td>
                  <td>
                    {data.isdone == true ? (
                      <input type="checkbox" checked></input>
                    ) : (
                      <input type="checkbox"></input>
                    )}
                  </td>
                  <td>
                    <span onClick={() => delfighter(data.id)}>
                      <FcDeleteRow size={30} />
                    </span>
                  </td>
                  <td>
                    {data.edit == false ? (
                      <span onClick={() => changedit(data.id)}>
                        <AiFillEdit size={25} color="red" />
                      </span>
                    ) : (
                      <span onClick={() => newdesc(data.id)}>
                        <AiFillEdit size={25} color="green" />
                      </span>
                    )}
                  </td>
                  {/* <td>
                  <button onClick={() => newdesc(data.id)}>valid edit</button>
                </td> */}
                </tr>
              </table>
            </div>
          );
        })}
      </span>
    </div>
  );
}

export default App;
