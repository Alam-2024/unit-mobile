import React from "react";
import { View } from "react-native";
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
  resourcesForEducators: Resources,
}: Pk3ShortTitlesTypes) {
  const uppercaseFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <View className="pkCustom-content">
      <View className="pkCustom-content__header">
        <CustomText value={unitTitle} big center />
        <View className="pkCustom-content__header__bottom">
          <CustomText value={TheBigIdea.description} />
          <Separator width="100%" height={2} opacity={0.5} />
          <View className="pkCustom-content__header__bottom__goals">
            {TheBigIdea.goals?.map((goal, index) => (
              <View
                key={index}
                className="pkCustom-content__header__bottom__goals__goal"
              >
                <CustomText value={goal} />
              </View>
            ))}
          </View>
        </View>
      </View>
      <View className="pkCustom-content__body">
        <View className="pkCustom-content__body__essential-questions">
          <CustomText value="Essential Questions" center big />
          <View className="pkCustom-content__body__essential-questions__questions">
            {EssentialQuestions.questions?.map((question, index) => (
              <View
                key={index}
                className="pkCustom-content__body__essential-questions__questions--question"
              >
                <CustomText value={question} center />
              </View>
            ))}
          </View>
        </View>
        <View className="pkCustom-content__body__instructional-plan">
          {instructionalPlan?.knowledgeAndVocabulary && (
            <View className="pkCustom-content__body__instructional-plan__knowledge-and-vocabulary">
              <CustomText value="Knowledge and Vocabulary" center big />
              <View className="pkCustom-content__body__instructional-plan__knowledge-and-vocabulary--line">
                <CustomText
                  value={
                    instructionalPlan.knowledgeAndVocabulary.handEyeCoordination
                  }
                />
                <CustomText
                  value={
                    instructionalPlan.knowledgeAndVocabulary
                      .throwingAndCatchingTechniques
                  }
                />
                <CustomText
                  value={
                    instructionalPlan.knowledgeAndVocabulary.strikingSkills
                  }
                />
                <CustomText
                  value={
                    instructionalPlan.knowledgeAndVocabulary
                      .teamworkAndCooperation
                  }
                />
                <CustomText
                  value={
                    instructionalPlan.knowledgeAndVocabulary
                      .motorSkillsAndSpatialAwareness
                  }
                />
              </View>
            </View>
          )}
          {instructionalPlan?.learningExperiences && (
            <View className="pkCustom-content__body__instructional-plan__learning-experiences">
              <CustomText value="Learning Experiences" center big />
              <View className="pkCustom-content__body__instructional-plan__learning-experiences--line">
                {instructionalPlan.learningExperiences.map(
                  (experience, index) => (
                    <View
                      key={index}
                      className="pkCustom-content__body__instructional-plan__learning-experiences--line--experience"
                    >
                      <CustomText value={experience.activity} />
                      <CustomText value={experience.objective} />
                    </View>
                  )
                )}
              </View>
            </View>
          )}
        </View>
        <View className="pkCustom-content__body__learning-goals">
          <CustomText value="Learning Goals" center big bold />
          <View className="pkCustom-content__body__learning-goals__goals">
            {/* Gross Motor */}
            {LearningGoals.GrossMotorSkills?.length !== 0 ? (
              <View className="pkCustom-content__body__learning-goals__gross-motor-skills">
                <CustomText value="Gross Motor" center big />
                <View className="pkCustom-content__body__learning-goals__gross-motor-skills--goals">
                  {LearningGoals.GrossMotorSkills?.map((goal, index) => (
                    <View
                      key={index}
                      className="pkCustom-content__body__learning-goals__gross-motor-skills--goals__goal"
                    >
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="gross motor skills" />
            )}
            {/* Non Locomotor */}
            {LearningGoals.NonLocomotorSkills?.length !== 0 ? (
              <View className="pkCustom-content__body__learning-goals__non-locomotor-skills">
                <CustomText value="Non Locomotor" center big />
                <View className="pkCustom-content__body__learning-goals__non-locomotor-skills--goals">
                  {LearningGoals.NonLocomotorSkills?.map((goal, index) => (
                    <View
                      key={index}
                      className="pkCustom-content__body__learning-goals__non-locomotor-skills--goals__goal"
                    >
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="non locomotor skills" />
            )}
            {/* Locomotor */}
            {LearningGoals.LocomotorSkills?.length !== 0 ? (
              <View className="pkCustom-content__body__learning-goals__locomotor-skills">
                <CustomText value="Locomotor" center big />
                <View className="pkCustom-content__body__learning-goals__locomotor-skills--goals">
                  {LearningGoals.LocomotorSkills?.map((goal, index) => (
                    <View
                      key={index}
                      className="pkCustom-content__body__learning-goals__locomotor-skills--goals__goal"
                    >
                      <CustomText value={uppercaseFirstLetter(goal)} center />
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <NonDataComponent value="locomotor skills" />
            )}
            {/* Object Control */}
            {LearningGoals.ObjectControlSkills?.length !== 0 ? (
              <View className="pkCustom-content__body__learning-goals__object-control-skills">
                <CustomText value="Object Control" center big />
                <View className="pkCustom-content__body__learning-goals__object-control-skills--goals">
                  {LearningGoals.ObjectControlSkills?.map((goal, index) => (
                    <View
                      key={index}
                      className="pkCustom-content__body__learning-goals__object-control-skills--goals__goal"
                    >
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
        <View className="pkCustom-content__body__instruction-and-learning-plan">
          <Separator width="100%" height={2} opacity={0.5} />
          <CustomText value="Instruction and Learning Plan" center big />
          {InstructionAndLearningPlan?.disciplinarySkills?.length !== 0 ? (
            <View className="pkCustom-content__body__instruction-and-learning-plan--disciplinary-skills">
              <CustomText value="Disciplinary Skills" big />
              {InstructionAndLearningPlan?.disciplinarySkills?.map(
                (goal, index) => (
                  <View
                    key={index}
                    className="pkCustom-content__body__instruction-and-learning-plan--disciplinary-skills--goal"
                  >
                    <CustomText value={uppercaseFirstLetter(goal)} />
                  </View>
                )
              )}
            </View>
          ) : (
            <NonDataComponent value="disciplinary skills" />
          )}
          {InstructionAndLearningPlan?.knowledgeAndVocabulary?.length !== 0 ? (
            <View className="pkCustom-content__body__instruction-and-learning-plan--knowledge-and-vocabulary">
              <CustomText value="Knowledge and Vocabulary" big />
              <View className="pkCustom-content__body__instruction-and-learning-plan--knowledge-and-vocabulary--line">
                {InstructionAndLearningPlan?.knowledgeAndVocabulary?.map(
                  (goal, index) => (
                    <View
                      key={index}
                      className="pkCustom-content__body__instruction-and-learning-plan--knowledge-and-vocabulary--line--goal"
                    >
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
      <View className="pkCustom-content__body__resources">
        {Resources?.length !== 0 ? (
          <CustomText value="Resources" center big />
        ) : (
          <NonDataComponent value="resources" />
        )}
        {Resources?.length !== 0 && (
          <View className="pkCustom-content__body__resources__content">
            {Resources?.map((resource, index) => (
              <View
                key={index}
                className="pkCustom-content__body__resources__content--resource"
              >
                <CustomText value={resource} center />
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

export default PkCustomContent;

const NonDataComponent = ({ value }: { value: string }) => {
  return (
    <View className="pkCustom-content__body--non-data">
      <View className="pkCustom-content__body--non-data__no-data">
        <CustomText value={`Non data provided for ${value}`} center big />
      </View>
    </View>
  );
};
