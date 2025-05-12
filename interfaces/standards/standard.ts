export interface StandardDescription {
  motorSkill: string;
  decisionMaking: string;
}
export interface StandardDescriptionSecond {
  application: string;
}
export interface StandardDescriptionThird {
  followingInstructions: string;
  activeParticipation: string;
  respectForOthers: string;
}

export interface StandardDescriptionFourth {
  collaboration: string[];
  communication: string[];
}

export interface StandardDescriptionLast {
  effort: string[];
  phrases: string[];
}
export interface Standard {
  title: string;
  description:
    | StandardDescription
    | StandardDescriptionSecond
    | StandardDescriptionThird
    | StandardDescriptionFourth
    | StandardDescriptionLast;
}

export interface Objective {
  description: string;
  skills: string[];
  standards: Standard[];
}

export interface LadderFSInterface {
  objectives: Objective[];
}
