import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppContext } from "@/hooks/useContextHook";
import CustomText from "../customs/CustomText";

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
    <View
      style={{
        marginHorizontal: 5,
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {showExpiration && <Expiration />}
      {list.map((unit) => (
        <TouchableOpacity key={unit} onPress={() => handleClick({ unit })}>
          <UnitNameButton
            unitName={unit}
            unitNameActive={unitTitle}
            access={accessToUnits[unit]}
            isAuthenticatedUser={isAuthenticatedAdminUser}
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
  isAuthenticatedUser,
}: {
  unitName: string;
  unitNameActive: string;
  access: boolean;
  isAuthenticatedUser: boolean;
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
      MusicRhythmsAndMovementActivities: "Music, Rhythms & Movement Activities",
      PhysicalExercises: "Physical Exercises",
      MovingAndGrooving: "Moving & Grooving",
      RhythmAndPlay: "Rhythm & Play",
      SensoryAdventures: "Sensory Adventures",
      TeamworkInAction: "Teamwork In Action",
      MightyMovers: "Mighty Movers",
      HandsOnFun: "Hands On Fun",
      BalancingAct: "Balancing Act",
      TargetGames: "Target Games",
      BasicTrackAndField: "Basic Track & Field: What Is Best?",
      AttackingAndDefending: "Attacking & Defending",
      DancePlants: "Dance Plants",
      FitnessFun: "Fitness Fun: Know My Body",
      NetWallFundamentals: "Net/Wall: Fundamentals",
      OutdoorActivities: "Outdoor Adventure Activities",
    };

    return unitNameMapping[name] || name;
  };
  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderColor: unitNameActive === unitName ? "#f40707" : "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
      }}
    >
      <CustomText
        value={getFriendlyUnitName(unitName)}
        color={unitNameActive === unitName ? "#f40707" : "#333"}
        center
        bold
        big
      />
      {/* {!access && isAuthenticatedUser && <CustomText value="🚫" />} */}
    </View>
  );
}

function Expiration() {
  return (
    <View>
      <CustomText
        value="Seems like your session has expired or you are not logged in yet"
        big
        center
      />
      <CustomText value="Please log in again" center />
    </View>
  );
}
