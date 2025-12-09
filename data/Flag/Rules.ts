import {
  IRuleSet,
  PenaltyType,
  RuleCategory,
  YardageType,
} from "@/interfaces/units/IFlagRules";

export const nflFlagRuleSet2025: IRuleSet = {
  name: "NFL FLAG Core Rules",
  versionYear: 2025,
  description:
    "Structured summary of key NFL FLAG rules for educational use in PE classes. Adapt wording and details according to the official rulebook used in your league or school.",
  rules: [
    // Field
    {
      id: "field-1",
      category: RuleCategory.Field,
      title: "Field Dimensions and Zones",
      description:
        "Field length and width are smaller than tackle football and include two end zones and clearly marked no-run zones near midfield and the end zones. No-run zones are used to limit power running plays and emphasise passing in specific areas of the field.",
    },
    {
      id: "field-2",
      category: RuleCategory.Field,
      title: "Lines and Boundaries",
      description:
        "Sidelines and end lines mark the playing area. Stepping on or beyond these lines is considered out of bounds. The ball is spotted at the point where the ball-carrier went out of bounds.",
    },

    // Team composition
    {
      id: "team-1",
      category: RuleCategory.TeamComposition,
      title: "Number of Players on the Field",
      description:
        "Games are played as small-sided formats (for example 5v5), with equal numbers of players from each team on the field. Substitutions are allowed between plays and during stoppages, following league or school guidelines.",
    },
    {
      id: "team-2",
      category: RuleCategory.TeamComposition,
      title: "Player Equipment and Flags",
      description:
        "Players wear flag belts with clearly visible flags on the hips. Shirts are tucked in so that flags are not obstructed. Cleats and mouthguards may be required depending on league or school policy.",
    },

    // Game timing
    {
      id: "time-1",
      category: RuleCategory.GameTiming,
      title: "Game Length and Periods",
      description:
        "Games are divided into two halves with a running or stopped clock, depending on the competition level. Each half has a set duration agreed by the league or school, with a short halftime interval.",
    },
    {
      id: "time-2",
      category: RuleCategory.GameTiming,
      title: "Clock Management",
      description:
        "The game clock may stop for scores, timeouts, injuries, or specific administrative reasons. Overtime procedures are defined for tie games when required by the league or tournament.",
    },

    // Scoring
    {
      id: "score-1",
      category: RuleCategory.Scoring,
      title: "Touchdowns and Extra Points",
      description:
        "A touchdown is scored when a player with possession of the ball crosses the opponent’s goal line while in bounds. After a touchdown, the scoring team attempts an extra point play from a designated distance, with different point values for shorter and longer attempts.",
    },
    {
      id: "score-2",
      category: RuleCategory.Scoring,
      title: "Safeties and Defensive Scoring",
      description:
        "A safety is awarded when the offensive team is downed in its own end zone or commits certain fouls in the end zone. Defensive teams can also score by returning interceptions for touchdowns.",
    },

    // Kickoff / Start
    {
      id: "start-1",
      category: RuleCategory.KickoffAndStart,
      title: "Starting Possession",
      description:
        "Games begin with one team starting on offense from a designated yard line (for example the five-yard line). Possession alternates after scores or at the beginning of the second half, following the competition rules.",
    },

    // Possession and downs
    {
      id: "downs-1",
      category: RuleCategory.PossessionAndDowns,
      title: "Series of Downs and Line-to-Gain",
      description:
        "The offense has a fixed number of downs to cross a line-to-gain (often midfield). Once this line is crossed, the offense receives another series of downs to score a touchdown. If the offense fails to reach the line-to-gain or score within its downs, possession changes to the other team.",
    },
    {
      id: "downs-2",
      category: RuleCategory.PossessionAndDowns,
      title: "Change of Possession",
      description:
        "Possession changes after touchdowns, safeties, unsuccessful series of downs, or interceptions. The new offensive team begins from its designated starting yard line or from the spot defined by the specific rule.",
    },

    // Line of scrimmage
    {
      id: "los-1",
      category: RuleCategory.LineOfScrimmage,
      title: "Line of Scrimmage and Neutral Zone",
      description:
        "The line of scrimmage is an imaginary line passing through the point where the ball is spotted before each play. The neutral zone separates offense and defense and must remain clear until the ball is snapped.",
    },

    // Passing
    {
      id: "pass-1",
      category: RuleCategory.Passing,
      title: "Forward Pass Rules",
      description:
        "The offense may attempt one forward pass per play from behind the line of scrimmage. The quarterback has a limited time to throw once the ball is snapped. All players are eligible receivers unless restricted by league rules.",
    },
    {
      id: "pass-2",
      category: RuleCategory.Passing,
      title: "Completion, Incompletion, and Interception",
      description:
        "A forward pass is complete when an eligible receiver secures control of the ball with at least one foot or body part in bounds. An incomplete pass is dead at the spot of the throw. A pass caught by the defence is an interception and may be returned, with the ball spotted where the defender is flagged or goes out of bounds.",
    },

    // Running
    {
      id: "run-1",
      category: RuleCategory.Running,
      title: "Ball Carrying and No-Run Zones",
      description:
        "The ball-carrier may advance the ball by running, except when the ball is within designated no-run zones near the line-to-gain or end zone, where only passing plays are allowed. The ball is spotted where it is when the flag is pulled, not where the player’s body is.",
    },
    {
      id: "run-2",
      category: RuleCategory.Running,
      title: "Hand-offs and Laterals",
      description:
        "Direct hand-offs, laterals, and backwards passes behind the line of scrimmage are permitted. Any player who receives a legal hand-off behind the line of scrimmage may throw a forward pass from behind that line.",
    },

    // Flag pulling
    {
      id: "flag-1",
      category: RuleCategory.FlagPulling,
      title: "Flag Pull as a Tackle",
      description:
        "A play ends when a defender legally removes the flag from the ball-carrier’s belt, the ball-carrier steps out of bounds, a score occurs, or the ball-carrier’s knee or arm touches the ground.",
    },
    {
      id: "flag-2",
      category: RuleCategory.FlagPulling,
      title: "Flag Guarding and Obstruction",
      description:
        "Ball-carriers may not deliberately guard or cover their flags with hands, arms, or the ball. Jerseys must remain tucked so flags are visible and accessible. Intentional obstruction of flags is penalised.",
    },

    // Blocking / contact
    {
      id: "contact-1",
      category: RuleCategory.BlockingAndContact,
      title: "Non-Contact Principle",
      description:
        "Flag football is a non-contact sport. Tackling, blocking, charging, or using the body to impede an opponent is not allowed. Players must avoid initiating physical contact and must play the ball and flags rather than the body.",
    },

    // Formations / motion
    {
      id: "form-1",
      category: RuleCategory.FormationsAndMotion,
      title: "Offensive Formations and Motion",
      description:
        "Offensive teams must line up with the ball at the line of scrimmage before the snap. Only one player may be in motion at a time, and motion must be parallel to or away from the line of scrimmage, not toward it at the snap.",
    },
    {
      id: "form-2",
      category: RuleCategory.FormationsAndMotion,
      title: "Snap of the Ball",
      description:
        "The center must snap the ball in a continuous motion to a player in the backfield. All players must be set for a brief moment before the snap to avoid false start penalties.",
    },

    // Defense
    {
      id: "def-1",
      category: RuleCategory.Defense,
      title: "Rushing the Passer",
      description:
        "Defensive players may rush the passer from behind a marked rush line after the snap. Once the ball is handed off or a lateral occurs behind the line of scrimmage, all defenders may rush.",
    },
    {
      id: "def-2",
      category: RuleCategory.Defense,
      title: "Coverage Responsibilities",
      description:
        "Defensive teams may play man-to-man, zone, or mixed coverages depending on the level and coaching philosophy. Defenders must avoid holding, grabbing, or making contact with receivers and must play the ball and flags.",
    },

    // Sportsmanship
    {
      id: "sport-1",
      category: RuleCategory.Sportsmanship,
      title: "Sportsmanship and Conduct",
      description:
        "Players, coaches, and spectators are expected to respect opponents, officials, and teammates, following league codes of conduct. Taunting, offensive language, or repeated unsportsmanlike behaviour may lead to penalties, ejections, or forfeits.",
    },
  ],

  penalties: [
    // Offensive
    {
      id: "pen-off-1",
      category: RuleCategory.Penalties,
      title: "Offside / False Start",
      description:
        "Offensive players moving toward the line of scrimmage before the snap, or failing to be set briefly before the snap, commit a false start or offside foul.",
      penaltyType: PenaltyType.Offensive,
      yardageType: YardageType.Five,
      lossOfDown: true,
    },
    {
      id: "pen-off-2",
      category: RuleCategory.Penalties,
      title: "Flag Guarding",
      description:
        "Using hands, arms, or the ball to shield or block access to the flag is considered flag guarding.",
      penaltyType: PenaltyType.Offensive,
      yardageType: YardageType.Five,
      lossOfDown: true,
    },
    {
      id: "pen-off-3",
      category: RuleCategory.Penalties,
      title: "Illegal Running in No-Run Zone",
      description:
        "Running plays that cross the line of scrimmage from within a designated no-run zone are illegal.",
      penaltyType: PenaltyType.Offensive,
      yardageType: YardageType.Five,
      lossOfDown: true,
    },

    // Defensive
    {
      id: "pen-def-1",
      category: RuleCategory.Penalties,
      title: "Defensive Pass Interference",
      description:
        "Contact that significantly hinders a receiver’s opportunity to catch a pass before the ball arrives is defensive pass interference.",
      penaltyType: PenaltyType.Defensive,
      yardageType: YardageType.Spot,
      automaticFirstDown: true,
    },
    {
      id: "pen-def-2",
      category: RuleCategory.Penalties,
      title: "Holding or Illegal Contact",
      description:
        "Grabbing, holding, or making illegal body contact with an opponent away from the ball is penalised as illegal contact or holding.",
      penaltyType: PenaltyType.Defensive,
      yardageType: YardageType.Five,
      automaticFirstDown: true,
    },

    // Unsportsmanlike
    {
      id: "pen-uns-1",
      category: RuleCategory.Penalties,
      title: "Unsportsmanlike Conduct",
      description:
        "Taunting, abusive language, intentional roughness, or disrespectful behaviour towards opponents, officials, or teammates is considered unsportsmanlike conduct.",
      penaltyType: PenaltyType.Unsportsmanlike,
      yardageType: YardageType.Ten,
      notes:
        "Repeated offences may result in player ejection or game forfeiture under league rules.",
    },
  ],
};
