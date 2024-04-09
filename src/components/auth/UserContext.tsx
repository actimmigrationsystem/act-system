// UserContext.tsx
import { createContext, useContext, useState } from "react";

interface UserContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [email, setEmail] = useState("");

    return (
        <UserContext.Provider value={{ email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
