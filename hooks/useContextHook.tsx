import { initialUserState } from "@/interfaces/constants/initialUserValues";
import { StoredUsers } from "@/interfaces/user/IUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

interface AppContextProps {
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticatedAdminUser: boolean;
  setIsAuthenticatedAdminUser: React.Dispatch<React.SetStateAction<boolean>>;
  loggedInUser: StoredUsers;
  setLoggedInUser: React.Dispatch<React.SetStateAction<StoredUsers>>;
  // isSessionExpired: boolean;
  // setIsSessionExpired: React.Dispatch<React.SetStateAction<boolean>>;
  sessionTimeLeft: number;
  setSessionTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = React.createContext<AppContextProps>({
  isUserAuthenticated: false,
  setIsUserAuthenticated: () => {},
  isAuthenticatedAdminUser: false,
  setIsAuthenticatedAdminUser: () => {},
  loggedInUser: initialUserState,
  setLoggedInUser: () => {},
  // isSessionExpired: true,
  // setIsSessionExpired: () => {},
  sessionTimeLeft: 0,
  setSessionTimeLeft: () => {},
});

//List of things to be added/updated in the context
//1. Add an function to check if the user is an admin and set the state accordingly
//2. Add a function to handle session expiration inside the context or if the user has logged out.
//3. Add a function to handle user authentication, depending also on the user role.

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticatedAdminUser, setIsAuthenticatedAdminUser] =
    React.useState<boolean>(false);
  const [isUserAuthenticated, setIsUserAuthenticated] =
    React.useState<boolean>(false);
  const [loggedInUser, setLoggedInUser] =
    useState<StoredUsers>(initialUserState);
  // const [isSessionExpired, setIsSessionExpired] = useState(true);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0);

  // useEffect(() => {
  //   if (loggedInUser && sessionTimeLeft > 0) {
  //     const timer = setInterval(() => {
  //       setSessionTimeLeft((prev) => {
  //         if (prev <= 1) {
  //           clearInterval(timer);
  //           handleSessionExpiration();
  //           return 0;
  //         }
  //         return prev - 1;
  //       });
  //     }, 1000);

  //     return () => clearInterval(timer);
  //   }
  //   //TODO: Check if the user is an admin and set the state accordingly
  //   // For example:
  //   // if (loggedInUser.role === "admin") {
  //   //   setIsAuthenticatedAdminUser(true);
  //   // } else {
  //   //   setIsAuthenticatedAdminUser(false);
  //   // }
  //   // setIsAuthenticatedAdminUser(true);
  // }, [loggedInUser, sessionTimeLeft]);

  // useEffect(() => {
  //   if (isSessionExpired) {
  //     handleSessionExpiration();
  //   }
  // }, [isSessionExpired]);

  const handleLoggedInUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      const loginTime = await AsyncStorage.getItem("loginTime");

      if (!storedUser || !loginTime) {
        setIsUserAuthenticated(false);
        // setIsSessionExpired(true);
        return;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleLoggedInUser();
  }, []);

  useEffect(() => {
    const showUserFromAsyncStorage = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const loginTime = await AsyncStorage.getItem("loginTime");

        if (user === null || loginTime === null) {
          return;
        }

        const timeElapsed = Date.now() - Number(loginTime);
        const sessionLimit = 60 * 60 * 1000; // 1 hora in ms
        const sessionTimeRemaining = sessionLimit - timeElapsed;
        console.log(
          "🚀 ~ showUserFromAsyncStorage ~ sessionTimeRemaining:",
          sessionTimeRemaining
        );
        setSessionTimeLeft(Math.floor(sessionTimeRemaining / 1000));
        setIsUserAuthenticated(true);
        setLoggedInUser(JSON.parse(user) as StoredUsers);
        // setIsSessionExpired(false);
        // }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    showUserFromAsyncStorage();
  }, []);

  // const handleSessionExpiration = async () => {
  //   setIsSessionExpired(true);
  //   setLoggedInUser(initialUserState);
  //   setIsUserAuthenticated(false);
  //   setSessionTimeLeft(0);
  //   await Promise.all([
  //     AsyncStorage.removeItem("user"),
  //     AsyncStorage.removeItem("loginTime"),
  //   ]);
  //   console.log("Session expired. User logged out.");
  // };

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        // isSessionExpired,
        // setIsSessionExpired,
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
