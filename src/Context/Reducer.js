export const initialState = {
  data: [],
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.data };

    default:
      return state;
  }
};

export default reducer;
