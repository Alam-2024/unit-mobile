export enum RuleCategory {
  Field = "Field",
  TeamComposition = "TeamComposition",
  GameTiming = "GameTiming",
  Scoring = "Scoring",
  KickoffAndStart = "KickoffAndStart",
  PossessionAndDowns = "PossessionAndDowns",
  LineOfScrimmage = "LineOfScrimmage",
  Passing = "Passing",
  Running = "Running",
  FlagPulling = "FlagPulling",
  BlockingAndContact = "BlockingAndContact",
  FormationsAndMotion = "FormationsAndMotion",
  Defense = "Defense",
  Penalties = "Penalties",
  Sportsmanship = "Sportsmanship",
}

export enum PenaltyType {
  Offensive = "Offensive",
  Defensive = "Defensive",
  Unsportsmanlike = "Unsportsmanlike",
  Administrative = "Administrative",
}

export enum YardageType {
  Five = 5,
  Ten = 10,
  Spot = -1, // enforced from spot of foul
  HalfDistance = -2, // half the distance to goal
}

export interface IRule {
  id: string;
  category: RuleCategory;
  title: string;
  description: string;
}

export interface IPenaltyRule extends IRule {
  penaltyType: PenaltyType;
  yardageType: YardageType;
  lossOfDown?: boolean;
  automaticFirstDown?: boolean;
  notes?: string;
}

export interface IRuleSet {
  name: string;
  versionYear: number;
  description: string;
  rules: IRule[];
  penalties: IPenaltyRule[];
}
