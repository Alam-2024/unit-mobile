/**
 * ISubjectUnit — Generic unit structure for non-PE subjects.
 * Simpler than IUnits (PE-specific); shared by Math, ELA, Science, etc.
 */

export interface ISubjectUnit {
  unitTitle: string;
  subject: string;
  gradeLevel: string;
  duration: string;
  bigIdea: string;
  essentialQuestions: string[];
  learningObjectives: string[];
  lessons: ILesson[];
  assessment: ISubjectAssessment;
  materials?: string[];
  vocabulary?: string[];
}

export interface ILesson {
  lessonNumber: number;
  title: string;
  objective: string;
  activities: ILessonActivity[];
  duration: string;
  resources?: string[];
}

export interface ILessonActivity {
  name: string;
  description: string;
  duration: string;
}

export interface ISubjectAssessment {
  formative: string[];
  summative: string;
  rubric?: ISubjectRubric[];
}

export interface ISubjectRubric {
  criterion: string;
  excellent: string;
  proficient: string;
  developing: string;
  beginning: string;
}
