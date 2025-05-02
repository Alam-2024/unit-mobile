import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CustomText from "../customs/CustomText";
import { Pk3ShortTitlesTypes } from "@/interfaces/pk3/pkTypes";
import Separator from "../customs/Separator";

function PkCustomContent({
  unitTitle,
  TheBigIdea,
  LearningGoals,
  EssentialQuestions,
  instructionalPlan,
  InstructionAndLearningPlan,
  resourcesForEducators,
}: Pk3ShortTitlesTypes) {
  const uppercaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 320 }}
    >
      <View style={styles.titleContainer}>
        <CustomText value={unitTitle} big center bold />
        <Separator width="100%" height={2} opacity={0.95} />
        <View style={styles.listContainer}>
          <CustomText value={TheBigIdea.description} center bold />
          <View style={styles.goalsContainer}>
            {TheBigIdea.goals?.map((goal, index) => (
              <View key={index} style={styles.listItem}>
                <View style={styles.bullet} />
                <CustomText value={goal} />
              </View>
            ))}
          </View>
        </View>
      </View>
      <View>
        <View style={styles.listContainer}>
          <CustomText value="Essential Questions" center medium bold />
          {EssentialQuestions.questions?.map((question, index) => (
            <View key={index} style={styles.listItem}>
              <View style={styles.bullet} />
              <CustomText value={question} />
            </View>
          ))}
        </View>
        <View>
          {instructionalPlan?.knowledgeAndVocabulary ? (
            <View style={styles.listContainer}>
              <CustomText value="Knowledge and Vocabulary" center medium bold />
              <View style={styles.skillsList}>
                <View style={styles.listItem}>
                  <View style={styles.bullet} />
                  <CustomText
                    value={
                      instructionalPlan.knowledgeAndVocabulary
                        .handEyeCoordination
                    }
                  />
                </View>
                <View style={styles.listItem}>
                  <View style={styles.bullet} />
                  <CustomText
                    value={
                      instructionalPlan.knowledgeAndVocabulary
                        .throwingAndCatchingTechniques
                    }
                  />
                </View>
                <View style={styles.listItem}>
                  <View style={styles.bullet} />
                  <CustomText
                    value={
                      instructionalPlan.knowledgeAndVocabulary.strikingSkills
                    }
                  />
                </View>
                <View style={styles.listItem}>
                  <View style={styles.bullet} />
                  <CustomText
                    value={
                      instructionalPlan.knowledgeAndVocabulary
                        .teamworkAndCooperation
                    }
                  />
                </View>
                <View style={styles.listItem}>
                  <View style={styles.bullet} />
                  <CustomText
                    value={
                      instructionalPlan.knowledgeAndVocabulary
                        .motorSkillsAndSpatialAwareness
                    }
                  />
                </View>
              </View>
            </View>
          ) : (
            <NonDataComponent value="knowledge and vocabulary" />
          )}
          {instructionalPlan?.learningExperiences ? (
            <View style={styles.listContainer}>
              <CustomText value="Learning Experiences" center medium bold />
              <View style={styles.listItemColumn}>
                {instructionalPlan.learningExperiences.map(
                  (experience, index) => (
                    <View key={index} style={styles.sessionContainer}>
                      <CustomText value={experience.activity} bold />
                      <CustomText value={experience.objective} />
                    </View>
                  )
                )}
              </View>
            </View>
          ) : (
            <NonDataComponent value="learning experiences" />
          )}
        </View>
        <View style={styles.listContainer}>
          <CustomText value="Learning Goals" center big bold />
          <View>
            {/* Gross Motor */}
            {LearningGoals.GrossMotorSkills?.length ? (
              <View style={styles.listItemColumn}>
                <CustomText value="Gross Motor" bold medium />
                <Separator width="100%" height={1} opacity={0.95} />
                <View style={styles.skillContainer}>
                  {LearningGoals.GrossMotorSkills?.map((goal, index) => (
                    <View key={index} style={styles.itemOnFlatList}>
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="gross motor skills" />
            )}
            {/* Non Locomotor */}
            {LearningGoals.NonLocomotorSkills?.length ? (
              <View style={styles.listItemColumn}>
                <CustomText value="Non Locomotor" center medium bold />
                <View style={styles.skillContainer}>
                  <Separator width="100%" height={1} opacity={0.95} />
                  {LearningGoals.NonLocomotorSkills?.map((goal, index) => (
                    <View key={index} style={styles.itemOnFlatList}>
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="non locomotor skills" />
            )}
            {/* Locomotor */}
            {LearningGoals.LocomotorSkills?.length ? (
              <View style={styles.listItemColumn}>
                <CustomText value="Locomotor" center medium bold />
                <Separator width="100%" height={1} opacity={0.95} />
                <View style={styles.skillContainer}>
                  {LearningGoals.LocomotorSkills?.map((goal, index) => (
                    <View key={index} style={styles.itemOnFlatList}>
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="locomotor skills" />
            )}
            {/* Object Control */}
            {LearningGoals.ObjectControlSkills?.length ? (
              <View style={styles.listItemColumn}>
                <CustomText value="Object Control" center medium bold />
                <Separator width="100%" height={1} opacity={0.95} />
                <View style={styles.skillContainer}>
                  {LearningGoals.ObjectControlSkills?.map((goal, index) => (
                    <View key={index} style={styles.itemOnFlatList}>
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="object control" />
            )}
          </View>
        </View>
        {/* Instruction and Learning Plan */}
        <View style={styles.listContainer}>
          <CustomText value="Instruction and Learning Plan" center big bold />
          <Separator width="100%" height={2} opacity={0.95} />
          {InstructionAndLearningPlan?.disciplinarySkills?.length ? (
            <View style={styles.listItemColumn}>
              <CustomText value="Disciplinary Skills" medium bold />
              {InstructionAndLearningPlan?.disciplinarySkills?.map(
                (goal, index) => (
                  <View key={index} style={styles.itemOnFlatList}>
                    <CustomText value={uppercaseFirstLetter(goal)} />
                  </View>
                )
              )}
            </View>
          ) : (
            <NonDataComponent value="disciplinary skills" />
          )}
          {InstructionAndLearningPlan?.knowledgeAndVocabulary?.length ? (
            <View style={styles.listItemColumn}>
              <CustomText value="Knowledge and Vocabulary" medium bold />
              <View style={styles.skillContainer}>
                {InstructionAndLearningPlan?.knowledgeAndVocabulary?.map(
                  (goal, index) => (
                    <View key={index} style={styles.itemOnFlatList}>
                      <CustomText value={uppercaseFirstLetter(goal)} />
                    </View>
                  )
                )}
              </View>
            </View>
          ) : (
            <NonDataComponent value="knowledge and vocabulary" />
          )}
        </View>
      </View>
      <View style={styles.listContainer}>
        <CustomText value="Resources" center big bold />
        <Separator width="100%" height={2} opacity={0.95} />
        {resourcesForEducators?.length ? (
          <View style={styles.listItemColumn}>
            {resourcesForEducators?.map((resource, index) => (
              <View key={index} style={styles.itemOnFlatList}>
                <CustomText value={resource} />
              </View>
            ))}
          </View>
        ) : (
          <NonDataComponent value="resources" />
        )}
      </View>
    </ScrollView>
  );
}

export default PkCustomContent;

const NonDataComponent = ({ value }: { value: string }) => {
  return (
    <View>
      <View>
        <CustomText value={`Non data provided for ${value}`} center big />
      </View>
    </View>
  );
};

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
    flexDirection: "column",
  },
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: "90%",
  },
  goalsContainer: {
    marginHorizontal: 16,
    marginTop: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  listItemColumn: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 8,
    marginTop: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333",
    marginTop: 6,
    marginRight: 4,
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
  skillContainer: {
    marginVertical: 1,
    marginHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
  },
  skillItem: {
    marginBottom: 4,
  },
  itemOnFlatList: {
    marginRight: 10,
    marginBottom: 8,
    backgroundColor: "#ececec",
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#33333311",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
