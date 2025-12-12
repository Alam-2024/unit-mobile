import React, { useState } from "react";
import { View } from "react-native";
import { useAppContext } from "@/hooks/useContextHook";
import DynamicModal from "../modal";
import Login from "../Login";
import Logout from "../Logout";
import CustomButton from "@/components/customs/CustomButton";
import CustomText from "@/components/customs/CustomText";
import CustomView from "@/components/customs/CustomView";
import UserReadOnly from "../Profile";
import { profileStyles } from "@/styles/profile";

type SportStatus = {
  name: string;
  active: boolean;
};

type GradeSports = {
  [sportName: string]: boolean;
};

type UserGrades = {
  [grade: string]: GradeSports;
};

const ProfileView = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"login" | "logout" | null>(null);

  const { isUserAuthenticated, loggedInUser } = useAppContext();

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
  };

  // Open modal
  // type: "login" | "logout"
  const openModal = (type: "login" | "logout") => {
    setModalType(type);
    setModalVisible(true);
  };

  // Extract user grades and sports from loggedInUser
  // loggedInUser is an object with keys as grades and values as objects of sports
  // Example: { "1st Grade": { "Soccer": true, "Basketball": false } }
  // Convert it to a more usable format
  // Example: { "1st Grade": { "Soccer": true, "Basketball": false } }
  const userGrades: UserGrades = {};
  if (loggedInUser) {
    Object.entries(loggedInUser).forEach(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        userGrades[key] = value as GradeSports;
      }
    });
  }

  return (
    <CustomView style={profileStyles.container} bgColor="#e5e5e5">
      <DynamicModal visible={isModalVisible} onClose={closeModal}>
        {modalType === "login" && <Login onCloseModal={closeModal} />}
        {modalType === "logout" && <Logout onCloseModal={closeModal} />}
      </DynamicModal>
      <View style={profileStyles.buttonContainer}>
        {isUserAuthenticated ? (
          <>
            <View>
              <CustomText
                value="Welcome"
                medium
                style={{
                  paddingBottom: 3,
                }}
              />
              <CustomText value={`${loggedInUser?.email}`} bold />
            </View>
            <CustomButton onPress={() => openModal("logout")}>
              <CustomText value="Logout" big center />
            </CustomButton>
          </>
        ) : (
          <>
            <CustomText
              value="Please login to view your profile."
              medium
              bold
            />
            <CustomButton onPress={() => openModal("login")}>
              <CustomText value="Login" big center />
            </CustomButton>
          </>
        )}
      </View>
      <View style={{ marginBottom: 20 }}>
        {isUserAuthenticated && loggedInUser ? (
          <UserReadOnly user={loggedInUser} />
        ) : (
          <CustomText
            value="You need to be logged in to view profile details."
            medium
            center
          />
        )}
      </View>
    </CustomView>
  );
};

export default ProfileView;
