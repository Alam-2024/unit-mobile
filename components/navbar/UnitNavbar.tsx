import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useAppContext } from "@/hooks/useContextHook";
import CustomText from "../customs/CustomText";
import CustomButton from "../customs/CustomButton";

type UnitNavbarProps = {
  list: string[];
  unitTitle: string;
  setUnitTitle: (title: string) => void;
  accessToUnits: { [key: string]: boolean }; // New prop for access to units
};

const UnitNavbar = ({
  list,
  unitTitle,
  setUnitTitle,
  accessToUnits,
}: UnitNavbarProps) => {
  const { isAuthenticatedAdminUser, isSessionExpired } = useAppContext();
  const [showExpiration, setShowExpiration] = React.useState<boolean>(false);

  const handleClick = ({ unit }: { unit: string }) => {
    if (!isAuthenticatedAdminUser && isSessionExpired) {
      setShowExpiration(true);
      setTimeout(() => {
        setShowExpiration(false);
      }, 2000);
    }
    setUnitTitle(unit);
  };
  return (
    <View style={styles(unitTitle, "").mainContainer}>
      {showExpiration && <Expiration />}
      {list.map((unit, index) => (
        <TouchableOpacity key={unit} onPress={() => handleClick({ unit })}>
          <UnitNameButton
            unitName={unit}
            unitNameActive={unitTitle}
            access={accessToUnits[unit]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default UnitNavbar;

function UnitNameButton({
  unitName,
  unitNameActive,
  access,
}: {
  unitName: string;
  unitNameActive: string;
  access: boolean;
}) {
  const getFriendlyUnitName = (name: string): string => {
    const unitNameMapping: { [key: string]: string } = {
      FloorHockey: "Floor Hockey",
      FinnishBaseball: "Finnish Baseball",
      TrackAndField: "Track & Field",
      StrikeAndField: "Strike & Field",
      InvasionGames: "Invasion Games",
      RollerSkating: "Roller Skating",
      CircuitTraining: "Circuit Training",
      OutdoorAdventureActivity: "Outdoor Adventure Activities",
      WaterSkills: "Water Skills",
      BatAndBall: "Bat & Ball",
      CompetitiveGames: "Competitive Games",
      BallGames: "Ball Games",
      ObjectControlSkills: "Object Control Skills",
      LocomotorSkills: "Locomotor Skills",
      MusicRhythmsAndMovementActivities: "Music, Rhythms & Movement",
      PhysicalExercises: "Physical Exercises",
      MovingAndGrooving: "Moving & Grooving",
      RhythmAndPlay: "Rhythm & Play",
      SensoryAdventures: "Sensory Adventures",
      TeamworkInAction: "Teamwork In Action",
      MightyMovers: "Mighty Movers",
      HandsOnFun: "Hands On Fun",
      BalancingAct: "Balancing Act",
      TargetGames: "Target Games",
      BasicTrackAndField: "Basic Track & Field",
      AttackingAndDefending: "Attacking & Defending",
      DancePlants: "Dance Plants",
      FitnessFun: "Fitness Fun: Know My Body",
      NetWallFundamentals: "Net/Wall: Fundamentals",
      OutdoorActivities: "Outdoor Adventure Activities",
    };

    return unitNameMapping[name] || name;
  };

  return (
    <View style={styles(unitNameActive, unitName).container}>
      <CustomText
        value={getFriendlyUnitName(unitName)}
        color={unitNameActive === unitName ? "#006222" : "#333"}
        center
        bold
        medium
        bgColor="#ffffff"
      />
      {!access && (
        <View style={styles(unitNameActive, unitName).icon}>
          <CustomText value="🚫" bgColor="#FFFFFFF0" />
        </View>
      )}
    </View>
  );
}

function Expiration() {
  return (
    <View style={styles("", "").textContainer}>
      <CustomText
        value="Seems like your session has expired or you are not logged in yet"
        big
        center
      />
      <CustomText value="Please log in again" center />
    </View>
  );
}

const styles = (unitNameActive: string, unitName: string) =>
  StyleSheet.create({
    mainContainer: {
      marginHorizontal: 10,
      marginBottom: 20,
      paddingHorizontal: 10,
      marginTop: 9,
      flexDirection: "row",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    container: {
      paddingVertical: 10,
      paddingHorizontal: 6,
      borderColor: unitNameActive === unitName ? "#006222" : "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      position: "relative",
      backgroundColor: "#ffffff",
    },
    icon: {
      position: "absolute",
      top: -9,
      right: -7,
      backgroundColor: "#ffffff",
      borderRadius: 30,
      padding: 2,
    },
    textContainer: {
      padding: 10,
      borderColor: "#f40707",
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      backgroundColor: "#ffffff",
      shadowColor: "#000",
      shadowOffset: { width: -1, height: 5 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
