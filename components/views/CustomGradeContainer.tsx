import { useAppContext } from "@/hooks/useContextHook";
import { IUnits } from "@/interfaces/units/IUnit";
import React from "react";
import CustomText from "../customs/CustomText";
import CustomContent from "../customs/CustomContent";
import UnitNavbar from "../navbar/UnitNavbar";
import { StyleSheet, View } from "react-native";

type Props = {
  units: { [key: string]: IUnits };
  unitTitle: string;
  setUnitTitle: (title: string) => void;
};
interface IUser {
  name: string;
  email: string;
  role: string;
  baned: boolean;
  first: { [key: string]: boolean };
  second: { [key: string]: boolean };
  third: { [key: string]: boolean };
  fourth: { [key: string]: boolean };
  fifth: { [key: string]: boolean };
}

export default function CustomGradeContainer({
  units,
  unitTitle,
  setUnitTitle,
}: Props) {
  const { loggedInUser, isUserAuthenticated } = useAppContext();

  const getAccessToUnits = (loggedUser: IUser) => {
    const access: { [key: string]: boolean } = {};

    const allActivities = {
      ...loggedUser.first,
      ...loggedUser.second,
      ...loggedUser.third,
      ...loggedUser.fourth,
      ...loggedUser.fifth,
    };

    for (const unit in allActivities) {
      access[unit] = allActivities[unit]; // true o false
    }

    return access;
  };

  // Get access to units
  const accessToUnits = getAccessToUnits(loggedInUser);

  // Verify if the user has access to the unit
  const hasAccess =
    accessToUnits[unitTitle] !== undefined ? accessToUnits[unitTitle] : false;

  const renderContent = (): JSX.Element | null => {
    if (!unitTitle) {
      return (
        <CustomText value="Please select a unit" center big color="#ff0000" />
      );
    }
    if (!hasAccess) {
      return (
        <View style={styles.nonAccessContainer}>
          <CustomText
            value="If you see this message, you don't have access to this unit"
            center
            big
            color="#ff0000"
            bold
          />
          <CustomText value="Please contact your teacher" center bold />
        </View>
      );
    }

    return units[unitTitle] ? <CustomContent {...units[unitTitle]} /> : null;
  };

  return (
    <>
      <UnitNavbar
        list={Object.keys(units)}
        setUnitTitle={setUnitTitle}
        unitTitle={unitTitle}
        accessToUnits={accessToUnits}
      />
      <View>
        {isUserAuthenticated && loggedInUser ? (
          renderContent()
        ) : (
          <CustomText value="You are not logged in" center big bold />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  nonAccessContainer: {
    padding: 10,
    borderColor: "#ff0000",
    borderWidth: 1,
    borderRadius: 8,
  },
});
