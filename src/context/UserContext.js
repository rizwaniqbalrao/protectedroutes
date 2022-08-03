import React from "react";

const CreateAuthStateContext = React.createContext(undefined);
const CreateAuthDispatchContext = React.createContext(undefined);

function UserContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  // we will pass prop of the above state
  // this handle function will return true false value
  const handleAuthChange = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    // it will fetch state one by one
    // extra bracket is beacuse of function
    //const [userData, setUserData] = React.useState([]);
    <CreateAuthStateContext.Provider value={isAuthenticated}>
      <CreateAuthDispatchContext.Provider value={{ handleAuthChange }}>
        {children}
      </CreateAuthDispatchContext.Provider>
    </CreateAuthStateContext.Provider>
  );
}
// this function is used to showing error if we not wrap the app in userprovider
const useCreateAuthStateContext = () => {
  const context = React.useContext(CreateAuthStateContext);
  if (context === undefined) {
    throw Error("useCreateAuthStateContext must be inside of UserProvider");
  }
  return context;
};

const useCreateAuthDispatchContext = () => {
  const context = React.useContext(CreateAuthDispatchContext);
  if (context === undefined) {
    throw Error("useCreateAuthDispatchContext must be inside of UserProvider");
  }
  return context;
};

const useAuthContext = () => {
  return [useCreateAuthStateContext(), useCreateAuthDispatchContext()];
};

export {
  UserContext,
  useCreateAuthStateContext,
  useCreateAuthDispatchContext,
  useAuthContext,
};
