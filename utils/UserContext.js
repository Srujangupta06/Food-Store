import { createContext } from "react";

const UserContext = createContext({
  user: "Guest",
});

export default UserContext;
