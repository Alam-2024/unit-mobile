import { useAppContext } from "@/hooks/useContextHook";
import { Pk3ShortTitlesTypes } from "@/interfaces/pk3/pkTypes";
import React from "react";
import CustomText from "../customs/CustomText";
import UnitNavbar from "../navbar/UnitNavbar";
import PkCustomContent from "./PkCustomContent";
import { View } from "react-native";

type Props = {
  units: { [key: string]: Pk3ShortTitlesTypes };
  unitTitle: string;
  setUnitTitle: (title: string) => void;
};

interface IUser {
  name: string;
  email: string;
  role: string;
  baned: boolean;
  pk3: { [key: string]: boolean };
  pk4: { [key: string]: boolean };
  kg: { [key: string]: boolean };
}

export default function CustomContainer({
  units,
  unitTitle,
  setUnitTitle,
}: Props) {
  const { isUserAuthenticated, loggedInUser } = useAppContext();

  const getAccessToUnits = (loggedUser: IUser) => {
    const access: { [key: string]: boolean } = {};

    const allActivities = {
      ...loggedUser.pk3,
      ...loggedUser.pk4,
      ...loggedUser.kg,
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
      return <CustomText value="Please select a unit" center big />;
    }
    if (!hasAccess) {
      return (
        <>
          <CustomText
            value="If you see this message, you don't have access to this unit"
            center
            big
            color="#ff0000"
            bold
          />
          <CustomText value="Please contact your teacher" center />
        </>
      );
    }

    return units[unitTitle] ? <PkCustomContent {...units[unitTitle]} /> : null;
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
          <CustomText value="You are not logged in" center big />
        )}
      </View>
    </>
  );
}
