import { initialUserValues, StoredUsers } from "@/interfaces/user/IUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

interface AppContextProps {
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticatedAdminUser: boolean;
  setIsAuthenticatedAdminUser: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInUser: StoredUsers;
  setLoggedInUser: React.Dispatch<React.SetStateAction<StoredUsers>>;
  isSessionExpired: boolean;
  setIsSessionExpired: React.Dispatch<React.SetStateAction<boolean>>;
  sessionTimeLeft: number;
  setSessionTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextProps>({
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => {},
  isAuthenticatedAdminUser: false,
  setIsAuthenticatedAdminUser: () => {},
  loggedInUser: initialUserValues,
  setLoggedInUser: () => {},
  isSessionExpired: true,
  setIsSessionExpired: () => {},
  sessionTimeLeft: 0,
  setSessionTimeLeft: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticatedAdminUser, setIsAuthenticatedAdminUser] =
    React.useState<boolean>(false);
  const [isUserAuthenticated, setIsUserAuthenticated] =
    React.useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] =
    useState<StoredUsers>(initialUserValues);
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
    setIsAuthenticatedAdminUser(true);
  }, [loggedInUser, sessionTimeLeft]);

  useEffect(() => {
    if (isSessionExpired) {
      handleSessionExpiration();
    }
  }, [isSessionExpired]);

  const handleLoggedInUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      const loginTime = await AsyncStorage.getItem("loginTime");

      if (!storedUser || !loginTime) {
        setIsUserAuthenticated(false);
        setIsSessionExpired(true);
        return;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleLoggedInUser();
  }, []);

  const handleSessionExpiration = () => {
    setIsSessionExpired(true);
    setLoggedInUser(initialUserValues);
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
        isAuthenticatedAdminUser,
        setIsAuthenticatedAdminUser,
        isUserAuthenticated,
        setIsUserAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
