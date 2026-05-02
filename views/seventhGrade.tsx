import React from "react";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import flagFootballSixthSeventh from "@/data/Flag/FlagSixthAndSeventh";
import cooperativeGamesSeventh from "@/data/CooperativeGames/CooGamesSeven";

export default function SeventhGrade() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the seventh grade
  const units: { [key: string]: IUnits } = {
    "Cooperative Games 7": cooperativeGamesSeventh,
    Swimming: SwimmingUnit1stGrade,
    "Flag Football 6–7": flagFootballSixthSeventh,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="seventh"
    />
  );
}
