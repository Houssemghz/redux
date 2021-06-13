import { v4 as uuidv4 } from "uuid";
const initialState = {
  datas: [
    {
      id: uuidv4(),
      description: "Khabib nurmagomedov",
      isdone: false,
      edit: false,
    },
    {
      id: uuidv4(),
      description: "Islam makhachiev",
      isdone: false,
      edit: false,
    },
    {
      id: uuidv4(),
      description: "Omar nurmagomedov",
      isdone: false,
      edit: false,
    },
    {
      id: uuidv4(),
      description: "Khamsat chimaev",
      isdone: false,
      edit: false,
    },
  ],
  shown: "all",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "add":
      return { datas: [...state.datas, payload], shown: state.shown };
    case "delete":
      return {
        datas: state.datas.filter((data) => data.id != payload),
        shown: state.shown,
      };
    case "check":
      return {
        datas: state.datas.map((data) =>
          data.id == payload ? { ...data, isdone: !data.isdone } : data
        ),
        shown: state.shown,
      };
    case "newadd":
      return {
        datas: state.datas.map((data) =>
          data.id == payload.id
            ? { ...data, description: payload.description, edit: !data.edit }
            : data
        ),
        shown: state.shown,
      };
    case "changebut":
      return {
        datas: state.datas.map((data) =>
          data.id == payload ? { ...data, edit: !data.edit } : data
        ),
        shown: state.shown,
      };
    case "show":
      return { ...state, shown: payload };
    case "update":
      return {
        datas: state.datas.map((data) =>
          data.id == payload ? { ...data, edit: !data.edit } : data
        ),
        shown: state.shown,
      };
    default:
      return state;
  }
};
export default reducer;
