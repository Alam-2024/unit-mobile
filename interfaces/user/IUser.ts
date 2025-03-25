import { UserActivity } from "./../../node_modules/expo-router/build/head/ExpoHeadModule.d";
import { string } from "yup";

enum AuthorizedUsers {
  ADMIN,
  USER,
}

export interface StoredUsers {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  baned: boolean;
  pk3: { [key: string]: boolean };
  pk4: { [key: string]: boolean };
  kg: { [key: string]: boolean };
  first: { [key: string]: boolean };
  second: { [key: string]: boolean };
  third: { [key: string]: boolean };
  fourth: { [key: string]: boolean };
  fifth: { [key: string]: boolean };
}

export const initialUserValues = {
  name: "",
  email: "",
  password: "",
  role: "user",
  baned: false,
  pk3: {
    BalancingAct: false,
    HandsOnFun: false,
    MightyMovers: false,
    MovingAndGrooving: false,
    RhythmAndPlay: false,
    SensoryAdventures: false,
    TeamworkInAction: false,
  },
  pk4: {
    BalancingAct: false,
    Gymnastics: false,
    HandsOnFun: false,
    MightyMovers: false,
    MovingAndGrooving: false,
    RhythmAndPlay: false,
    SensoryAdventures: false,
    TeamworkInAction: false,
  },
  kg: {
    BallGames: false,
    BatAndBall: false,
    CompetitiveGames: false,
    LocomotorSkills: false,
    MusicRhythmsAndMovementActivities: false,
    ObjectControlSkills: false,
    PhysicalExercises: false,
    WaterSkills: false,
  },
  first: {
    InvasionGames: false,
    TargetGames: false,
    Gymnastics: false,
    BasicTrackAndField: false,
    FitnessFun: false,
    AttackingAndDefending: false,
    Swimming: false,
    DancePlants: false,
    BatAndBall: false,
  },
  second: {
    InvasionGames: false,
    OutdoorActivities: false,
    DodgeBall: false,
    Gymnastics: false,
    Athletics: false,
    CircuitTraining: false,
    Swimming: false,
    NetWallFundamentals: false,
    Basketball: false,
  },
  third: {
    Athletics: false,
    CircuitTraining: false,
    Gymnastics: false,
    InvasionGames: false,
    Badminton: false,
    StrikeAndField: false,
  },
  fourth: {
    Badminton: false,
    Basketball: false,
    CircuitTraining: false,
    FinnishBaseball: false,
    Football: false,
    Gymnastics: false,
    InvasionGames: false,
    RollerSkating: false,
    Swimming: false,
    TrackAndField: false,
  },
  fifth: {
    Dodgeball: false,
    FinnishBaseball: false,
    Soccer: false,
    Swimming: false,
    FloorHockey: false,
  },
};
