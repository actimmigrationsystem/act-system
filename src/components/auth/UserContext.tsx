import { createContext, useContext, useState, } from "react";

interface UserContextProps {
  email: string;
  setEmail: (newEmail: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmailState] = useState<string>(() => {
    const storedEmail = localStorage.getItem("email");
    return storedEmail ? storedEmail : "";
  });

  const setEmail = (newEmail: string) => {
    localStorage.setItem("email", newEmail);
    setEmailState(newEmail);
  };

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
