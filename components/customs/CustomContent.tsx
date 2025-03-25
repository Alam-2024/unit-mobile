import { View, Text, ScrollView } from "react-native";
import React from "react";
import { IUnits } from "@/interfaces/units/IUnit";

const CustomContent = ({
  title,
  unitTitle,
  gradeLevel,
  lengthOfUnit,
  overallExpectation,
  essentialQuestions,
  skills,
  weeklyPlan,
}: IUnits) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 10 }}
      showsVerticalScrollIndicator={false}
    >
      <Text>{title}</Text>
      <Text>{unitTitle}</Text>
      <Text>{gradeLevel}</Text>
      <Text>{lengthOfUnit}</Text>
      <Text>{overallExpectation}</Text>
      <Text>{essentialQuestions}</Text>
      <Text>{essentialQuestions}</Text>
      <Text>{essentialQuestions}</Text>
      <Text>{essentialQuestions}</Text>
      <Text>{essentialQuestions}</Text>

      <Text>{skills}</Text>
    </ScrollView>
  );
};

export default CustomContent;
