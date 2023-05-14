//setup data layer
// We nned this to track the basket

import { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is how you use it inside of a component

export const useStateValue = () => useContext(StateContext);
