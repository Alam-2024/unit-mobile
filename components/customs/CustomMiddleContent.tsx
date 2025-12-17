import { View, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import Separator from "./Separator";

//TODO: Re-do this component to make it cleaner and display the content properly, and real data.

export default function CustomMiddleContent({
  gradeLevel,
  lengthOfUnit,
  overallExpectation,
  essentialQuestions,
  skills,
  weeklyPlan,
  rubric,
}: IUnits) {
  const [resizePic, setResizePic] = React.useState(false);
  function hasSkills(
    rubric: any
  ): rubric is { skills: string[]; levels: any[] } {
    return (
      rubric && Array.isArray(rubric.skills) && Array.isArray(rubric.levels)
    );
  }

  const ImgUrlContainer = (url: string) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: url }}
          style={{
            width: resizePic ? 300 : 200,
            height: resizePic ? 300 : 150,
            borderRadius: 10,
            alignSelf: "center",
            resizeMode: resizePic ? "contain" : "stretch",
          }}
          onLoad={() => setResizePic(true)}
          onError={() => setResizePic(false)}
        />
        <CustomButton
          onPress={() => setResizePic(!resizePic)}
          shadowColor="#000"
          shadowWidth={1}
          shadowHeight={2}
          shadowOpacity={resizePic ? 0.35 : 0.5}
          shadowRadius={3.84}
          style={{
            marginTop: 10,
            width: resizePic ? "92%" : "40%",
            marginHorizontal: resizePic ? "4%" : "30%",
            borderColor: resizePic ? "#8f8f8f" : "#b7b7b7",
            borderWidth: 1,
          }}
        >
          <CustomText
            value={resizePic ? "Minimize" : "Maximize"}
            medium
            center
            bold
          />
        </CustomButton>
      </View>
    );
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.titleContainer}>
        <CustomText value={gradeLevel} bold medium center />
        <CustomText value={lengthOfUnit} bold />
      </View>

      <CustomText value={overallExpectation} bold center />
      <Separator width="100%" height={2} opacity={0.5} />

      {/* Essential Questions */}
      <View style={styles.listContainer}>
        <CustomText value="Essential Questions" bold medium center />
        <Separator width="100%" height={1} opacity={0.095} />
        {essentialQuestions.map((question, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.bullet} />
            <CustomText value={question} medium />
          </View>
        ))}
      </View>

      <Separator width="100%" height={2} opacity={0.5} />

      {/* Skills */}
      <View style={styles.listContainer}>
        <CustomText value="Skills" bold medium center />
        <Separator width="100%" height={1} opacity={0.095} />
        {skills.map((skill, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.bullet} />
            <CustomText value={skill} medium />
          </View>
        ))}
      </View>

      <Separator width="100%" height={2} opacity={0.5} />

      {/* Weekly Plan */}
      <View style={styles.listContainer}>
        <CustomText value="Weekly Plan" bold medium center />
        <Separator width="100%" height={1} opacity={0.095} />
        {weeklyPlan.map((week) => (
          <View key={week.week} style={styles.weekContainer}>
            <>
              <View style={styles.titleContainer}>
                <CustomText value={`Week ${week.week}`} bold medium />
              </View>
              <Separator width="100%" height={1} opacity={0.95} />
            </>
            {week.sessions.map((session) => (
              <View key={session.sessionNumber} style={styles.sessionContainer}>
                <CustomText
                  value={`${session.sessionNumber}. ${session.title}`}
                  medium
                  bold
                />
                <CustomText value={session.objective} medium />
                {session.activities.map((activity, idx) => (
                  <View key={idx} style={styles.activityContainer}>
                    <CustomText value={`- ${activity.description}`} medium />
                    {activity.details.map((detail, i) => (
                      <CustomText key={i} value={`  • ${detail}`} />
                    ))}
                  </View>
                ))}
                <Separator width="100%" height={1} opacity={0.095} />
                {session.imgUrl ? (
                  ImgUrlContainer(session.imgUrl)
                ) : (
                  <CustomText value="No image available" medium center bold />
                )}
              </View>
            ))}
          </View>
        ))}
      </View>

      <Separator width="100%" height={2} opacity={0.5} />

      {/* Rubric */}
      {hasSkills(rubric) ? (
        <View style={[styles.listContainer, { marginBottom: 120 }]}>
          <CustomText value="Rubric" bold medium center />
          <Separator width="100%" height={1} opacity={0.095} />

          {/* Skills List */}
          <CustomText value="Skills Assessed:" bold />
          <View style={styles.skillsList}>
            {rubric.skills.map((skill, idx) => (
              <View key={idx} style={styles.skillItem}>
                <CustomText value={`• ${skill}`} medium />
              </View>
            ))}
          </View>

          {/* Levels */}
          {rubric.levels.map((level, idx) => (
            <View key={idx} style={styles.levelContainer}>
              <CustomText value={level.level} bold />
              <View style={styles.levelDetails}>
                {rubric.skills.map((skill, sIdx) => {
                  const skillKey = skill.toLowerCase().replace(/\s/g, "");
                  const description = (level as any)[skillKey] || "N/A";
                  return (
                    <View key={sIdx} style={styles.skillDescription}>
                      <CustomText value={`${skill}:`} bold />
                      <CustomText value={description} />
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
            medium
            center
            bold
          />
        </View>
      )}
    </ScrollView>
  );
}

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
