import { View, Text } from "react-native";
import React from "react";
import { Pk3ShortTitlesTypes } from "@/interfaces/pk3/pkTypes";
import { WaterSkillsKgData } from "@/data/Pks-Kg/Kg/WaterSkills";
import ballGames from "@/data/Pks-Kg/Kg/BallGames";
import { batAndBallUnit } from "@/data/Pks-Kg/Kg/BatAndBall";
import funAndFairPlayInCompetitions from "@/data/Pks-Kg/Kg/CompetitiveGames";
import exploringLocomotionWonderlandUnit from "@/data/Pks-Kg/Kg/LocomotorSkills";
import harmonyOfMovementAndMusicUnit from "@/data/Pks-Kg/Kg/MusicRhythmAndMovActivities";
import masteringObjectControlUnit from "@/data/Pks-Kg/Kg/ObjectControllSkills";
import physicalEducationActivities from "@/data/Pks-Kg/Kg/PhysicalExercise";
import CustomContainer from "@/components/views/CustomContainer";

const KgGrade = () => {
  const [unitTitle, setUnitTitle] = React.useState<string>("");
  const unitNames: { [key: string]: Pk3ShortTitlesTypes } = {
    WaterSkills: WaterSkillsKgData,
    BatAndBall: batAndBallUnit,
    CompetitiveGames: funAndFairPlayInCompetitions,
    BallGames: ballGames,
    MusicRhythmsAndMovementActivities: harmonyOfMovementAndMusicUnit,
    ObjectControlSkills: masteringObjectControlUnit,
    PhysicalExercises: physicalEducationActivities,
    LocomotorSkills: exploringLocomotionWonderlandUnit,
  };
  return (
    <CustomContainer
      units={unitNames}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
    />
  );
};

export default KgGrade;
