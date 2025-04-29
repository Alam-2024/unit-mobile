import { View, Text } from "react-native";
import React from "react";
import gymnasticsThird from "@/data/Gymnastics/GymnasticsThird";
import invasionGamesThird from "@/data/InvasionGames/InvasionThird";
import circuitTrainingThird from "@/data/Circuit/CircuitTrainingThird";
import { badmintonThird } from "@/data/Badminton/BadmintonThird";
import { SwimmingForThirdGrade } from "@/data/Swimming/SwimmingThird";
import trackAndFieldThirdSpeed from "@/data/TrackAndField/TrackAndFieldThirdSpeed";
import { IUnits } from "@/interfaces/units/IUnit";
import athleticsThird from "@/data/Athletics/Athletics";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";

const ThirdGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");

  const units: { [key: string]: IUnits } = {
    Gymnastics: gymnasticsThird,
    InvasionGames: invasionGamesThird,
    CircuitTraining: circuitTrainingThird,
    Swimming: SwimmingForThirdGrade,
    Athletics: athleticsThird,
    Badminton: badmintonThird,
    StrikeAndField: trackAndFieldThirdSpeed,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
};

export default ThirdGrade;
