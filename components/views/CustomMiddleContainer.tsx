import { View, Text } from "react-native";
import React, { JSX } from "react";
import { useAppContext } from "@/hooks/useContextHook";
import CustomText from "../customs/CustomText";
import CustomMiddleContent from "../customs/CustomMiddleContent";
import UnitNavbar from "../navbar/UnitNavbar";

type Props = {
  units: { [key: string]: any };
  unitTitle: string;
  setUnitTitle: (title: string) => void;
};
interface IUser {
  name: string;
  email: string;
  role: string;
  baned: boolean;
  sixth: { [key: string]: boolean };
  seventh: { [key: string]: boolean };
  eighth: { [key: string]: boolean };
  ninth: { [key: string]: boolean };
  tenth: { [key: string]: boolean };
  eleventh: { [key: string]: boolean };
  twelfth: { [key: string]: boolean };
}

export default function CustomMiddleContainer({
  units,
  unitTitle,
  setUnitTitle,
}: Props) {
  console.log("🚀 ~ CustomMiddleContainer ~ units:", units);
  const { loggedInUser, isUserAuthenticated } = useAppContext();

  const getAccessToUnits = (loggedUser: IUser) => {
    const access: { [key: string]: boolean } = {};

    const allActivities = {
      ...loggedUser.sixth,
      ...loggedUser.seventh,
      ...loggedUser.eighth,
      ...loggedUser.ninth,
      ...loggedUser.tenth,
      ...loggedUser.eleventh,
      ...loggedUser.twelfth,
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
        <View>
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

    return units[unitTitle] ? (
      <CustomMiddleContent {...units[unitTitle]} />
    ) : null;
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
