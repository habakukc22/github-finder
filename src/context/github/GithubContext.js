import React, { useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = React.createContext({
  users: [],
  user: {},
  loading: true,
  repos: [],
  dispatch: () => {},
});

export const GithubContextProvider = (props) => {
  const initialState = { users: [], user: {}, repos: [], loading: false };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const usersContext = {
    ...state,
    dispatch,
  };

  return (
    <GithubContext.Provider value={usersContext}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
