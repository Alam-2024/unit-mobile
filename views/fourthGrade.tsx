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

const FourthGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");

  const units: { [key: string]: IUnits } = {
    Gymnastics: gymnasticsFourth,
    Football: soccerFourth,
    Basketball: basketballFourth,
    FinnishBaseball: pesaPalloFourth,
    InvasionGames: invasionGamesFourth,
    Swimming: SwimmingFor4thGrade,
    TrackAndField: trackAndFieldFourth,
    CircuitTraining: circuitTrainingFourth,
    Badminton: badmintonFourth,
    RollerSkating: rollerSkatingFourth,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
};

export default FourthGrade;
