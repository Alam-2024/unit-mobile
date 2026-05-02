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
import flagFootballThird from "@/data/Flag/FlagThird";

const ThirdGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");

  const units: { [key: string]: IUnits } = {
    CircuitTraining: circuitTrainingThird,
    InvasionGames: invasionGamesThird,
    Gymnastics: gymnasticsThird,
    Athletics: athleticsThird,
    TrackAndField: trackAndFieldThirdSpeed,
    Swimming: SwimmingForThirdGrade,
    Badminton: badmintonThird,
    "Flag Football": flagFootballThird,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="third"
    />
  );
};

export default ThirdGrade;
