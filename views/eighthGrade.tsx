import React from "react";
import SwimmingUnit1stGrade from "@/data/Swimming/SwimmingFirst";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomMiddleContainer from "@/components/views/CustomMiddleContainer";
import flagFootballEighthNinth from "@/data/Flag/FlagEightAndNine";
import cooperativeGamesEighthNinth from "@/data/CooperativeGames/CooGamesEightNine";

export default function EighthGrade() {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  //TODO: Create the unit data for the eighth grade
  const units: { [key: string]: IUnits } = {
    "Cooperative Games 8–9": cooperativeGamesEighthNinth,
    Swimming: SwimmingUnit1stGrade,
    "Flag Football 8–9": flagFootballEighthNinth,
  };
  return (
    <CustomMiddleContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="eighth"
    />
  );
}
