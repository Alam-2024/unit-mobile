import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import GradeScreen from "@/components/grade/GradeScreen";

// Grade content (PE) — existing views
import PkThreeGrade from "@/views/pkThreeGrade";
import PkFourthGrade from "@/views/pkFourthGrade";
import KgGrade from "@/views/kgGrade";
import FirstGrade from "@/views/firstGrade";
import SecondGrade from "@/views/secondGrade";
import ThirdGrade from "@/views/thirdGrade";
import FourthGrade from "@/views/fourthGrade";
import FifthGrade from "@/views/fifthGrade";
import SixthGrade from "@/views/sixthGrade";
import SeventhGrade from "@/views/seventhGrade";
import EighthGrade from "@/views/eighthGrade";
import NinthGrade from "@/views/ninthGrade";
import TenthGrade from "@/views/tenthGrade";
import EleventhGrade from "@/views/eleventhGrade";
import Twelfth from "@/views/Twelfth";

interface GradeConfig {
  slug: string;
  label: string;
  fullName: string;
  makePE: () => React.ReactNode;
}

const GRADE_MAP: Record<string, GradeConfig> = {
  "PK-3": { slug: "pk3",      label: "PK-3",      fullName: "Pre-Kindergarten 3", makePE: () => <PkThreeGrade /> },
  "PK-4": { slug: "pk4",      label: "PK-4",      fullName: "Pre-Kindergarten 4", makePE: () => <PkFourthGrade /> },
  "KG":   { slug: "kg",       label: "KG",        fullName: "Kindergarten",        makePE: () => <KgGrade /> },
  "1°":   { slug: "first",    label: "1st Grade", fullName: "First Grade",         makePE: () => <FirstGrade /> },
  "2°":   { slug: "second",   label: "2nd Grade", fullName: "Second Grade",        makePE: () => <SecondGrade /> },
  "3°":   { slug: "third",    label: "3rd Grade", fullName: "Third Grade",         makePE: () => <ThirdGrade /> },
  "4°":   { slug: "fourth",   label: "4th Grade", fullName: "Fourth Grade",        makePE: () => <FourthGrade /> },
  "5°":   { slug: "fifth",    label: "5th Grade", fullName: "Fifth Grade",         makePE: () => <FifthGrade /> },
  "6°":   { slug: "sixth",    label: "6th Grade", fullName: "Sixth Grade",         makePE: () => <SixthGrade /> },
  "7°":   { slug: "seventh",  label: "7th Grade", fullName: "Seventh Grade",       makePE: () => <SeventhGrade /> },
  "8°":   { slug: "eighth",   label: "8th Grade", fullName: "Eighth Grade",        makePE: () => <EighthGrade /> },
  "9°":   { slug: "ninth",    label: "9th Grade", fullName: "Ninth Grade",         makePE: () => <NinthGrade /> },
  "10°":  { slug: "tenth",    label: "10th Grade",fullName: "Tenth Grade",         makePE: () => <TenthGrade /> },
  "11°":  { slug: "eleventh", label: "11th Grade",fullName: "Eleventh Grade",      makePE: () => <EleventhGrade /> },
  "12°":  { slug: "twelfth",  label: "12th Grade",fullName: "Twelfth Grade",       makePE: () => <Twelfth /> },
};

export default function Data() {
  const { grade } = useLocalSearchParams<{ grade: string }>();
  const config = GRADE_MAP[grade ?? ""];

  const peContent = useMemo(
    () => (config ? config.makePE() : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [grade]
  );

  if (!config || !peContent) {
    return <View style={styles.empty} />;
  }

  return (
    <View style={styles.screen}>
      <GradeScreen
        gradeSlug={config.slug}
        gradeLabel={config.label}
        peContent={peContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  empty: {
    flex: 1,
  },
});
