import { ReactNode, createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export type UserContextType = {
  user: any;
  setUser: (value: any) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

type UserProviderType = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<any>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
