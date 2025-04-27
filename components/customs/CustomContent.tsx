import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomText from "./CustomText";
import Separator from "./Separator";

const CustomContent = ({
  gradeLevel,
  lengthOfUnit,
  overallExpectation,
  essentialQuestions,
  skills,
  weeklyPlan,
  rubric,
}: IUnits) => {
  function hasSkills(
    rubric: any
  ): rubric is { skills: string[]; levels: any[] } {
    return (
      rubric && Array.isArray(rubric.skills) && Array.isArray(rubric.levels)
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 10, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.titleContainer}>
        <CustomText
          value={gradeLevel}
          bgColor="transparent"
          bold
          medium
          center
        />
        <CustomText value={lengthOfUnit} bgColor="transparent" bold />
      </View>

      <CustomText value={overallExpectation} bgColor="transparent" bold right />
      <Separator width="100%" height={2} opacity={0.5} />

      {/* Essential Questions */}
      <View style={styles.listContainer}>
        <CustomText
          value="Essential Questions"
          bgColor="transparent"
          bold
          medium
          center
        />
        <Separator width="100%" height={1} opacity={0.095} />
        {essentialQuestions.map((question, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.bullet} />
            <CustomText value={question} bgColor="transparent" medium />
          </View>
        ))}
      </View>

      <Separator width="100%" height={2} opacity={0.5} />

      {/* Skills */}
      <View style={styles.listContainer}>
        <CustomText value="Skills" bgColor="transparent" bold medium center />
        <Separator width="100%" height={1} opacity={0.095} />
        {skills.map((skill, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.bullet} />
            <CustomText value={skill} bgColor="transparent" medium />
          </View>
        ))}
      </View>

      <Separator width="100%" height={2} opacity={0.5} />

      {/* Weekly Plan */}
      <View style={styles.listContainer}>
        <CustomText
          value="Weekly Plan"
          bgColor="transparent"
          bold
          medium
          center
        />
        <Separator width="100%" height={1} opacity={0.095} />
        {weeklyPlan.map((week) => (
          <View key={week.week} style={styles.weekContainer}>
            <CustomText
              value={`Week ${week.week}`}
              bgColor="transparent"
              bold
            />
            {week.sessions.map((session) => (
              <View key={session.sessionNumber} style={styles.sessionContainer}>
                <CustomText
                  value={`${session.sessionNumber}. ${session.title}`}
                  bgColor="transparent"
                  medium
                  bold
                />
                <CustomText
                  value={session.objective}
                  bgColor="transparent"
                  medium
                />
                {session.activities.map((activity, idx) => (
                  <View key={idx} style={styles.activityContainer}>
                    <CustomText
                      value={`- ${activity.description}`}
                      bgColor="transparent"
                      medium
                    />
                    {activity.details.map((detail, i) => (
                      <CustomText
                        key={i}
                        value={`  • ${detail}`}
                        bgColor="transparent"
                      />
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>

      <Separator width="100%" height={2} opacity={0.5} />

      {/* Rubric */}
      {hasSkills(rubric) ? (
        <View style={[styles.listContainer, { marginBottom: 120 }]}>
          <CustomText value="Rubric" bgColor="transparent" bold medium center />
          <Separator width="100%" height={1} opacity={0.095} />

          {/* Skills List */}
          <CustomText value="Skills Assessed:" bgColor="transparent" bold />
          <View style={styles.skillsList}>
            {rubric.skills.map((skill, idx) => (
              <View key={idx} style={styles.skillItem}>
                <CustomText value={`• ${skill}`} bgColor="transparent" medium />
              </View>
            ))}
          </View>

          {/* Levels */}
          {rubric.levels.map((level, idx) => (
            <View key={idx} style={styles.levelContainer}>
              <CustomText value={level.level} bgColor="transparent" bold />
              <View style={styles.levelDetails}>
                {rubric.skills.map((skill, sIdx) => {
                  const skillKey = skill.toLowerCase().replace(/\s/g, "");
                  const description = (level as any)[skillKey] || "N/A";
                  return (
                    <View key={sIdx} style={styles.skillDescription}>
                      <CustomText
                        value={`${skill}:`}
                        bgColor="transparent"
                        bold
                      />
                      <CustomText value={description} bgColor="transparent" />
                    </View>
                  );
                })}
              </View>
            </View>
          ))}
        </View>
      ) : (
        <View style={[styles.listContainer, { marginBottom: 110 }]}>
          <Separator width="100%" height={1} opacity={0.095} />
          <CustomText
            value="No rubric available for this unit."
            bgColor="transparent"
            medium
            center
            bold
          />
        </View>
      )}
    </ScrollView>
  );
};

export default CustomContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ececec",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: "90%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333",
    marginTop: 8,
    marginRight: 10,
  },
  weekContainer: {
    marginVertical: 10,
  },
  sessionContainer: {
    marginLeft: 10,
    marginVertical: 6,
  },
  activityContainer: {
    marginLeft: 20,
    marginVertical: 4,
  },
  skillsList: {
    marginLeft: 10,
    marginVertical: 8,
  },
  skillItem: {
    marginBottom: 4,
  },
  levelContainer: {
    marginVertical: 10,
  },
  levelDetails: {
    marginLeft: 10,
  },
  skillDescription: {
    marginBottom: 6,
  },
});
