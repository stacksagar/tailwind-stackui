import { createContext, useReducer, useContext } from "react";

const State = {
  currentTheme: "dark",
};

const reducer = (state = State, action) => {
  const { type, payload } = action;
  switch (type) {
    case "set_current_theme":
      return { ...state, currentTheme: payload };

    default:
      return state;
  }
};

const RootContext = createContext();

const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, State);
  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

const useRootContext = () => useContext(RootContext);

export { RootProvider, useRootContext };
