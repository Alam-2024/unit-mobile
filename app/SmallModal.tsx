import React, { useState, useEffect } from "react";
import { StyleSheet, View, SectionList, TouchableOpacity } from "react-native";
import { LadderFS } from "@/data/LearningLadders/LadderFirstAndSecond";
import { LadderPEGrades3to5 } from "@/data/LearningLadders/LadderThirdToFifth";
import LearningLadderAccordion from "@/components/LearningLadderAccordion";
import CustomText from "@/components/customs/CustomText";
import { Objective } from "@/interfaces/standards/standard";
import Separator from "@/components/customs/Separator";

interface SectionData {
  title: string;
  data: Objective[];
  key: string;
}

interface LadderSelectorProps {
  selected: "FS" | "PE";
  onSelect: (value: "FS" | "PE") => void;
}

const LadderSelector = ({ selected, onSelect }: LadderSelectorProps) => {
  return (
    <View style={styles.selectorContainer}>
      <TouchableOpacity
        style={[styles.button, selected === "FS" && styles.buttonActive]}
        onPress={() => onSelect("FS")}
      >
        <CustomText
          value="Fundamental Skills"
          color={selected === "FS" ? "#fff" : "#167481"}
          bold
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selected === "PE" && styles.buttonActive]}
        onPress={() => onSelect("PE")}
      >
        <CustomText
          value="Physical Education"
          color={selected === "PE" ? "#fff" : "#167481"}
          bold
        />
      </TouchableOpacity>
    </View>
  );
};

const SmallModal = () => {
  const [selectedLadder, setSelectedLadder] = useState<"PE" | "FS">("FS");
  const [sectionsToRender, setSectionsToRender] = useState<SectionData[]>([]);

  useEffect(() => {
    if (selectedLadder === "FS") {
      setSectionsToRender([
        {
          title: "Fundamental Skills",
          data: LadderFS.objectives || [],
          key: "FS",
        },
      ]);
    } else {
      setSectionsToRender([
        {
          title: "Physical Education",
          data: LadderPEGrades3to5.objectives || [],
          key: "PE",
        },
      ]);
    }
  }, [selectedLadder]);

  return (
    <View style={styles.container}>
      <View style={styles.handle} />
      {/* Selector */}
      <View style={styles.selectorWrapper}>
        <LadderSelector
          selected={selectedLadder}
          onSelect={setSelectedLadder}
        />
      </View>
      <SectionList
        sections={sectionsToRender}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => <LearningLadderAccordion data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <CustomText value={title} big bold />
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  handle: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#167481",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 8,
  },
  selectorWrapper: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
  },
  selectorContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  listWrapper: {
    flex: 1,
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: "#fff",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#167481",
    marginHorizontal: 8,
  },
  buttonActive: {
    backgroundColor: "#167481",
  },
});

export default SmallModal;
