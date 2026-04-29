import { View, Text } from "react-native";
import React from "react";
import { BalancingActFourthData } from "@/data/Pks-Kg/Pk-4/BalancingAct";
import { GymnasticsPkFourthData } from "@/data/Pks-Kg/Pk-4/Gymnastics";
import { HandsOnFunFourthData } from "@/data/Pks-Kg/Pk-4/Hands-onFun";
import { MightyMoversFourthData } from "@/data/Pks-Kg/Pk-4/MightyMover";
import { MovingAndGroovingFourthData } from "@/data/Pks-Kg/Pk-4/MovingAndGrooving";
import { RhythmAndPlayFourthData } from "@/data/Pks-Kg/Pk-4/RhythmAndPlay";
import { SensoryAdventuresFourthData } from "@/data/Pks-Kg/Pk-4/SensoryAdventures";
import { TeamWorkInActionFourthData } from "@/data/Pks-Kg/Pk-4/TeamWorkInAction";
import { Pk3ShortTitlesTypes } from "@/interfaces/pk3/pkTypes";
import CustomContainer from "@/components/views/CustomContainer";

const PkFourthGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");

  const unitNames: { [key: string]: Pk3ShortTitlesTypes } = {
    MovingAndGrooving: MovingAndGroovingFourthData,
    HandsOnFun: HandsOnFunFourthData,
    MightyMovers: MightyMoversFourthData,
    SensoryAdventures: SensoryAdventuresFourthData,
    RhythmAndPlay: RhythmAndPlayFourthData,
    TeamworkInAction: TeamWorkInActionFourthData,
    Gymnastics: GymnasticsPkFourthData,
  };

  return (
    <CustomContainer
      units={unitNames}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug="pk4"
    />
  );
};

export default PkFourthGrade;
