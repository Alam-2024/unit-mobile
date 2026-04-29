import { View, Text } from "react-native";
import React from "react";
import { IUnits } from "@/interfaces/units/IUnit";
import gymnasticsFourth from "@/data/Gymnastics/GymnasticsFourth";
import soccerFourth from "@/data/Soccer/SoccerFourth";
import basketballFourth from "@/data/Basketball/BasketballFourth";
import pesaPalloFourth from "@/data/Pesapallo/PesaPalloFourth";
import invasionGamesFourth from "@/data/InvasionGames/InvasionFourth";
import { SwimmingFor4thGrade } from "@/data/Swimming/SwimmingFourth";
import trackAndFieldFourth from "@/data/TrackAndField/TrackAndFieldFourth";
import circuitTrainingFourth from "@/data/Circuit/CircuitTrainingFourth";
import badmintonFourth from "@/data/Badminton/BadmintonFourth";
import rollerSkatingFourth from "@/data/RollerSkating/RollerSkatingFourth";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import flagFootballFourthFifth from "@/data/Flag/FlagFourthAndFifth";

const FourthGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");

  const units: { [key: string]: IUnits } = {
    FinnishBaseball: pesaPalloFourth,
    Swimming: SwimmingFor4thGrade,
    Gymnastics: gymnasticsFourth,
    Badminton: badmintonFourth,
    RollerSkating: rollerSkatingFourth,
    CircuitTraining: circuitTrainingFourth,
    TrackAndField: trackAndFieldFourth,
    InvasionGames: invasionGamesFourth,
    Football: soccerFourth,
    Basketball: basketballFourth,
    FlagFootBall: flagFootballFourthFifth,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="fourth"
    />
  );
};

export default FourthGrade;
