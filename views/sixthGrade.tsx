import React from "react";
import CustomMiddleContainer from "@/components/views/CustomMiddleContainer";
import flagFootballSixthSeventh from "@/data/Flag/FlagSixthAndSeventh";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import cooGamesSix from "@/data/CooperativeGames/CooGamesSix";
import { IUnits } from "@/interfaces/units/IUnit";

const SixthGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the sixth grade
  const units: { [key: string]: IUnits } = {
    "Cooperative Games 6": cooGamesSix,
    Swimming: SwimmingUnit1stGrade,
    "Flag Football 6–7": flagFootballSixthSeventh,
  };
  return (
    <CustomMiddleContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="sixth"
    />
  );
};

export default SixthGrade;
