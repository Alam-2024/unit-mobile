import React from "react";
import SwimmingUnitSecondGrade from "@/data/Swimming/SwimmingSecond";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";

const SecondGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  const units: { [key: string]: IUnits } = {
    Swimming: SwimmingUnitSecondGrade,
  };
  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="second"
    />
  );
};

export default SecondGrade;
