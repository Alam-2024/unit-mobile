import React, { useState, useEffect } from "react";

interface AppContextProps {
  loggedInUser: boolean;
  setLoggedInUser: React.Dispatch<React.SetStateAction<boolean>>;
  isSessionExpired: boolean;
  setIsSessionExpired: React.Dispatch<React.SetStateAction<boolean>>;
  sessionTimeLeft: number;
  setSessionTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextProps>({
  loggedInUser: false,
  setLoggedInUser: () => {},
  isSessionExpired: true,
  setIsSessionExpired: () => {},
  sessionTimeLeft: 0,
  setSessionTimeLeft: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(true);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0);

  useEffect(() => {
    if (loggedInUser && sessionTimeLeft > 0) {
      const timer = setInterval(() => {
        setSessionTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSessionExpiration();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [loggedInUser, sessionTimeLeft]);

  const handleSessionExpiration = () => {
    setIsSessionExpired(true);
    setLoggedInUser(false);
    // localStorage.removeItem("user");
    // localStorage.removeItem("loginTime");
  };

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isSessionExpired,
        setIsSessionExpired,
        sessionTimeLeft,
        setSessionTimeLeft,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
