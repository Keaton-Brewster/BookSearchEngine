import React, { createContext, useReducer } from "react";

const initialState = {
  savedBooks: [],
  update: 0,
};
function Reducer(state, action) {
  switch (action.type) {
    case "update saved books":
      return {
        ...state,
        update: (state.update += 1),
      };
    case "set saved books":
      return {
        ...state,
        savedBooks: action.payload,
      };
    default:
      throw new Error();
  }
}

const Store = ({ children }) => {
  const [store, dispatch] = useReducer(Reducer, initialState);

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const StoreContext = createContext(initialState);
export default Store;
