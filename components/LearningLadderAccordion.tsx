import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "./customs/CustomText";
import Separator from "./customs/Separator";
import { Objective, Standard } from "@/interfaces/standards/standard";

interface LearningLadderAccordionProps {
  data: Objective;
}

const renderArrayItems = (items: string[]) =>
  items.map((item, index) => (
    <View key={index} style={styles.standardItem}>
      <View style={styles.bullet} />
      <CustomText value={item} style={styles.standardText} medium />
    </View>
  ));

const LearningLadderAccordion = ({ data }: LearningLadderAccordionProps) => {
  return (
    <View style={[styles.objectiveContainer, { backgroundColor: "#fff" }]}>
      <Separator />
      <CustomText value={data.description} medium />
      {data.skills.length > 0 && (
        <View style={styles.skillsContainer}>
          {data.skills.map((skill) => (
            <View key={skill} style={styles.skillTag}>
              <CustomText value={skill} bold color="#353535" />
            </View>
          ))}
        </View>
      )}

      {data.standards.map((standard: Standard) => {
        const desc = standard.description as any;

        return (
          <View key={standard.title} style={{ marginBottom: 12 }}>
            <CustomText value={standard.title} big bold />

            {/* effort */}
            {Array.isArray(desc["effort"]) && renderArrayItems(desc["effort"])}

            {/* phrases */}
            {Array.isArray(desc["phrases"]) && (
              <>
                <CustomText value="Phrases" bold />
                {renderArrayItems(desc["phrases"])}
              </>
            )}

            {/* collaboration */}
            {Array.isArray(desc["collaboration"]) &&
              renderArrayItems(desc["collaboration"])}

            {/* communication */}
            {Array.isArray(desc["communication"]) &&
              renderArrayItems(desc["communication"])}

            {/* motorSkill */}
            {Array.isArray(desc["motorSkill"]) &&
              renderArrayItems(desc["motorSkill"])}

            {/* decisionMaking */}
            {Array.isArray(desc["decisionMaking"]) &&
              renderArrayItems(desc["decisionMaking"])}

            {/* followingInstructions */}
            {typeof desc["followingInstructions"] === "string" && (
              <CustomText
                value={desc["followingInstructions"]}
                style={styles.standardText}
                medium
              />
            )}

            {/* activeParticipation */}
            {typeof desc["activeParticipation"] === "string" && (
              <CustomText
                value={desc["activeParticipation"]}
                style={styles.standardText}
                medium
              />
            )}

            {/* respectForOthers */}
            {typeof desc["respectForOthers"] === "string" && (
              <CustomText
                value={desc["respectForOthers"]}
                style={styles.standardText}
                medium
              />
            )}

            {/* application */}
            {typeof desc["application"] === "string" && (
              <CustomText
                value={desc["application"]}
                style={styles.standardText}
                medium
              />
            )}

            {/* effort (string) */}
            {typeof desc["effort"] === "string" && (
              <CustomText
                value={desc["effort"]}
                style={styles.standardText}
                medium
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  objectiveContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    gap: 4,
  },
  skillTag: {
    backgroundColor: "#ddd",
    padding: 6,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  standardItem: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#dee2e6",
    alignItems: "center",
  },
  bullet: {
    width: 10,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#6c757d",
    marginRight: 8,
    marginTop: 7,
  },
  standardText: {
    color: "#6c757d",
    margin: 2,
    flexShrink: 1,
  },
});

export default LearningLadderAccordion;
