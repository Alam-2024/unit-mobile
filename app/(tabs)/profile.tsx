import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useAppContext } from "@/hooks/useContextHook";
import DynamicModal from "../modal";
import Login from "../Login";
import Logout from "../Logout";
import CustomButton from "@/components/customs/CustomButton";
import CustomText from "@/components/customs/CustomText";

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

const windowWidth = Dimensions.get("window").width;

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

  // Render each sport item
  // item: { name: string; active: boolean }
  // active: true if the sport is active, false otherwise
  // name: name of the sport
  const renderSportItem = ({ item }: { item: SportStatus }) => (
    <View
      style={[
        styles.sportItem,
        item.active ? styles.activeSport : styles.inactiveSport,
      ]}
    >
      <Text
        style={[
          styles.sportText,
          item.active ? styles.activeText : styles.inactiveText,
        ]}
      >
        {item.name}
      </Text>
    </View>
  );

  // Render each grade item
  // item: string (grade name)
  // sportsObj: object with sports as keys and boolean as values
  // Example: { "Soccer": true, "Basketball": false }
  // Convert it to an array of objects with name and active properties
  // Example: [{ name: "Soccer", active: true }, { name: "Basketball", active: false }]
  const renderGradeItem = ({ item }: { item: string }) => {
    const sportsObj = userGrades[item];
    if (!sportsObj) return null;

    const sportsArray: SportStatus[] = Object.entries(sportsObj).map(
      ([name, active]) => ({
        name,
        active,
      })
    );

    return (
      <View style={styles.gradeContainer}>
        <Text style={styles.gradeTitle}>
          {item[0].toUpperCase() + item.slice(1)}
        </Text>
        <FlatList
          data={sportsArray}
          horizontal
          keyExtractor={(sport) => sport.name}
          renderItem={renderSportItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DynamicModal visible={isModalVisible} onClose={closeModal}>
        {modalType === "login" && <Login onCloseModal={closeModal} />}
        {modalType === "logout" && <Logout onCloseModal={closeModal} />}
      </DynamicModal>
      <View style={styles.buttonContainer}>
        {isUserAuthenticated ? (
          <>
            <View>
              <CustomText
                value={`Welcome, ${loggedInUser?.name || "User"}.`}
                bgColor="transparent"
                medium
              />
              <CustomText
                value={`${loggedInUser?.email}`}
                bgColor="transparent"
              />
            </View>
            <CustomButton onPress={() => openModal("logout")}>
              <CustomText value="Logout" bgColor="transparent" big center />
            </CustomButton>
          </>
        ) : (
          <>
            <CustomText
              value="Please login to view your profile."
              bgColor="transparent"
              medium
              bold
            />
            <CustomButton onPress={() => openModal("login")}>
              <CustomText value="Login" bgColor="transparent" big center />
            </CustomButton>
          </>
        )}
      </View>

      <FlatList
        data={Object.keys(userGrades)}
        keyExtractor={(item) => item}
        renderItem={renderGradeItem}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text>No grades or sports available</Text>
          </View>
        }
      />
    </View>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 16,
    color: "#222",
  },
  buttonContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gradeContainer: {
    marginBottom: 20,
  },
  gradeTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 12,
    color: "#333",
  },
  sportItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: windowWidth * 0.2,
  },
  activeSport: {
    backgroundColor: "#002f02b5",
  },
  inactiveSport: {
    backgroundColor: "#ddd",
  },
  sportText: {
    fontWeight: "600",
    fontSize: 14,
  },
  activeText: {
    color: "#fff",
  },
  inactiveText: {
    color: "#666",
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: "center",
  },
});
