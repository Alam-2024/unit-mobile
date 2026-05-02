import { View, Text } from "react-native";
import React from "react";
import { dodgeballFifth } from "@/data/Dodgeball/DodgeballFifth";
import floorHockeyFifth from "@/data/Hockey/FloorHockeyFifth";
import soccerFifth from "@/data/Soccer/SoccerFifth";
import pesaPalloFifth from "@/data/Pesapallo/PesaPalloFifth";
import swimmingUnit from "@/data/Swimming/SwimmingFifth";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import flagFootballFourthFifth from "@/data/Flag/FlagFourthAndFifth";

const FifthGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");

  const units: { [key: string]: IUnits } = {
    Dodgeball: dodgeballFifth,
    Soccer: soccerFifth,
    FloorHockey: floorHockeyFifth,
    Swimming: swimmingUnit,
    PesaPallo: pesaPalloFifth,
    "Flag Football 4–5": flagFootballFourthFifth,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="fifth"
    />
  );
};

export default FifthGrade;
