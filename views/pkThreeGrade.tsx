import { View, Text } from "react-native";
import React from "react";
import { BalancingActThirdData } from "@/data/Pks-Kg/Pk3/BalancingAct";
import { HandsOnFunThirdData } from "@/data/Pks-Kg/Pk3/Hands-onFun";
import { MightyMoversThirdData } from "@/data/Pks-Kg/Pk3/MightyMovers";
import { MovingAndGroovingThirdData } from "@/data/Pks-Kg/Pk3/MovingAndGrooving";
import { RhythmAndPlayThirdData } from "@/data/Pks-Kg/Pk3/RhythmAndPlay";
import { SensoryAdventuresThirdData } from "@/data/Pks-Kg/Pk3/SensoryAdventures";
import { TeamWorkInActionThirdData } from "@/data/Pks-Kg/Pk3/TeamWorkInAction";
import { Pk3ShortTitlesTypes } from "@/interfaces/pk3/pkTypes";
import CustomContainer from "@/components/views/CustomContainer";

const PkThreeGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  const unitNames: { [key: string]: Pk3ShortTitlesTypes } = {
    MovingAndGrooving: MovingAndGroovingThirdData,
    MightyMovers: MightyMoversThirdData,
    BalancingAct: BalancingActThirdData,
    HandsOnFun: HandsOnFunThirdData,
    SensoryAdventures: SensoryAdventuresThirdData,
    RhythmAndPlay: RhythmAndPlayThirdData,
    TeamworkInAction: TeamWorkInActionThirdData,
  };
  return (
    <CustomContainer
      units={unitNames}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
};

export default PkThreeGrade;
