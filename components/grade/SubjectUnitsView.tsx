import React, { useState } from "react";
import { IUnits } from "@/interfaces/units/IUnit";
import CustomGradeContainer from "@/components/views/CustomGradeContainer";

interface Props {
  units: { [key: string]: IUnits };
  gradeSlug: string;
}

/**
 * Generic view that renders any IUnits map via CustomGradeContainer.
 * Used for all non-PE subjects that have real content.
 */
export default function SubjectUnitsView({ units, gradeSlug }: Props) {
  const [unitTitle, setUnitTitle] = useState<string>("");

  return (
    <CustomGradeContainer
      units={units}
      unitTitle={unitTitle}
      setUnitTitle={setUnitTitle}
      gradeSlug={gradeSlug}
    />
  );
}
