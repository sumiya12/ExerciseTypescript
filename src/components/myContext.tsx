import { createContext, useContext, useEffect, useState } from "react";
import { User, UserContextType } from "../types/type";
const intial = {
  users: [],
  setUsers: () => {},
};
const UserContext = createContext<UserContextType>(intial);

export const useUser: () => UserContextType = () => {
  return useContext(UserContext);
};
const UserProvider: any = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
