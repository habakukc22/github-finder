import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducers";

const AlertContext = createContext({
  alert: {},
  setAlert: () => {},
});

export const AlertContextProvider = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  const alertContext = { alert: state, setAlert: setAlert };

  return (
    <AlertContext.Provider value={alertContext}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
