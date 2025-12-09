import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const flagFootballThird: IUnits = {
  unitTitle: "Flag Football",
  unitDBTitle: "Flag Football",
  title:
    "Learning NFL Flag Football Through Fun, Inclusive, Non-Contact Games and Challenges",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will learn basic skills and rules of NFL-style flag football, including throwing, catching, running with the ball, and safely pulling flags. They will apply simple offensive and defensive strategies in small-sided games, developing teamwork, communication, and fair play in a fun, non-contact environment.",
  essentialQuestions: [
    "What are the basic rules that make flag football a safe, non-contact version of American football?",
    "How do throwing, catching, running, and flag pulling contribute to successful play in flag football?",
    "What simple offensive and defensive strategies can help a team keep possession or stop the other team?",
    "How can students communicate and work together effectively during small-sided flag football games?",
    "Why are fair play, respect, and safety essential when playing competitive invasion games like flag football?",
  ],
  skills: [
    "Execute basic overhand and underhand throws to a stationary and moving partner.",
    "Catch a football using soft hands and proper body positioning.",
    "Run with the ball while keeping control and awareness of space and defenders.",
    "Safely pull a flag without contact, respecting the no-tackle rule.",
    "Apply simple offensive (spreading out, passing lanes) and defensive (marking a player, staying between player and end zone) strategies.",
    "Demonstrate teamwork, communication, and fair play in small-sided games.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction, Safety, and Basic Handling",
          objective:
            "Understand flag football as a non-contact game and learn safe rules, basic grip, and ball handling.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "General dynamic warm-up: jogging, high knees, butt kicks, side shuffles.",
                "Tag-style game in small space to activate spatial awareness (without flags).",
              ],
            },
            {
              description: "Safety and Rules Intro",
              details: [
                "Explain and demonstrate no-contact rule: no tackling, no blocking, no diving for flags.",
                "Show how to wear the flag belt correctly and how to pull a flag safely.",
              ],
            },
            {
              description: "Ball Handling Basics",
              details: [
                "Grip and hold the football securely while walking and jogging.",
                "Simple partner rolls and underhand tosses to build confidence.",
              ],
            },
            {
              description: "Mini-Game",
              details: [
                "Relay races carrying the ball, focusing on control and staying in own lane.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretching and quick group check-in on rules learned.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Throwing and Catching Fundamentals",
          objective:
            "Develop basic overhand throw and catching technique with a partner.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Dynamic stretches and movement in lanes with ball (walking, jogging, changing direction).",
              ],
            },
            {
              description: "Throwing Technique",
              details: [
                "Teach stance, grip, and over-the-shoulder throwing motion.",
                "Station work: short passes to a wall/target, then to a partner at short distance.",
              ],
            },
            {
              description: "Catching Technique",
              details: [
                "Teach “soft hands” and bringing the ball into the body.",
                "Partner catching at different heights and angles, starting slow then adding light movement.",
              ],
            },
            {
              description: "Applied Game",
              details: [
                "Small 3v3 “keep-away” passing game in a grid, no flags yet, focusing on accurate passes and moving to space.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Partner stretching and brief reflection on success cues for throwing/catching.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          sessionNumber: 3,
          title: "Running with the Ball and Flag Pulling",
          objective:
            "Practice running with control while protecting the ball and introduce safe flag pulling technique.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Agility ladder or cone drills: forward, lateral, and zig-zag running.",
              ],
            },
            {
              description: "Running with the Ball",
              details: [
                "Drills focusing on holding the ball securely while changing speed and direction.",
                "Obstacle courses with cones where students must keep eyes up and avoid “defender cones”.",
              ],
            },
            {
              description: "Flag Pulling Basics",
              details: [
                "Demonstrate correct body position for pulling a flag without pushing or grabbing clothes.",
                "1v1 flag pulling in small channels: one runner tries to pass, defender focuses only on the flag.",
              ],
            },
            {
              description: "Mini-Game",
              details: [
                "“Flag Tag” in small grids where players try to pull flags and collect them, reinforcing safety and control.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Walking, breathing exercises, and short recap of safe behaviour.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Combining Pass, Catch, and Run",
          objective:
            "Link throwing, catching, and running in simple sequences with defenders pulling flags.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing in triangles: throw, move to a new spot, receive again.",
              ],
            },
            {
              description: "Skill Sequence",
              details: [
                "Station circuits: catch a short pass, turn and run through a channel, defender tries to pull flag before the end cone.",
              ],
            },
            {
              description: "Small-Sided Game",
              details: [
                "3v3 or 4v4 games on short fields with a simple rule: must complete at least one forward pass before scoring.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Static stretching for legs and shoulders; group feedback on what made passing successful.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 3,
      sessions: [
        {
          sessionNumber: 5,
          title: "Offensive Basics: Space and Simple Routes",
          objective:
            "Understand spacing on offence and practise simple movement patterns to get open for a pass.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Movement in grids changing directions on teacher signal, focusing on awareness and avoiding others.",
              ],
            },
            {
              description: "Getting Open",
              details: [
                "Teach simple routes (straight, diagonal, come-back) without complex naming.",
                "Partner work: one throws, one runs a simple route and catches, then switch.",
              ],
            },
            {
              description: "3v2 Advantage Drills",
              details: [
                "Three attackers vs two defenders on a short field, attackers must spread out and complete a pass to score.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light jogging to walk, breathing and shoulder stretches.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Defensive Basics: Containment and Marking",
          objective:
            "Introduce basic defensive positioning: staying between the attacker and the end zone, and pulling flags effectively.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Mirror drills in pairs: one moves, the other stays in front and mirrors without contact.",
              ],
            },
            {
              description: "Defensive Positioning",
              details: [
                "Teach staying low, balanced, and facing the ball carrier.",
                "1v1 and 2v2 drills focusing on staying between the attacker and the scoring line.",
              ],
            },
            {
              description: "Small-Sided Defence Focus",
              details: [
                "4v4 games with bonus points for successful flag pulls and good positioning (teacher feedback).",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Group reflection on what good defence looks like; static stretching.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 4,
      sessions: [
        {
          sessionNumber: 7,
          title: "Game Play, Roles, and Teamwork",
          objective:
            "Apply learned skills and simple strategies in structured small-sided games, emphasising communication and fair play.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing and catching in small groups, revisiting key cues.",
              ],
            },
            {
              description: "Team Roles and Simple Plays",
              details: [
                "Assign basic roles (quarterback, receiver, defender) without overcomplicating positions.",
                "Practise 1–2 simple “plays”: snap, short route, quick pass and run.",
              ],
            },
            {
              description: "Tournament-Style Games",
              details: [
                "Rotating 4v4/5v5 games on short fields, focusing on respectful communication and applying rules.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Team huddles for peer feedback and positive comments; stretching.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Games and Assessment",
          objective:
            "Demonstrate flag football skills, strategies, and sportsmanship in game situations and reflect on personal progress.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light dynamic warm-up chosen by students (student-led).",
              ],
            },
            {
              description: "Game Performance",
              details: [
                "Short-sided games with clear criteria for assessment: effort, application of skills, teamwork, and fair play.",
              ],
            },
            {
              description: "Self and Peer Assessment",
              details: [
                "Simple checklist or reflection: what I do well, what I improved, what I want to keep practising.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Whole-group cool-down and final reflection on what they enjoyed about flag football.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default flagFootballThird;

// ¿Te gustaría que lo adaptemos ahora para 4.º/5.º con un poco más de táctica y vocabulario “NFL”, o primero afinamos objetivos/essential questions según tu sistema de standards-based grading? [4]

// Fuentes
// [1] NFL Flag Football Curriculum https://www.fuelup.org/getmedia/224fb843-2c93-459b-9251-416a4be71099/NFL-Flag-Football-Curriculum.pdf
// [2] NFL Flag Football Rules https://nflflag.com/coaches/flag-football-rules
// [3] Basic Flag Football Rules https://nflflag.com/coaches/flag-football-rules/how-to-play-flag-football
// [4] FLAG FOOTBALL LESSON PLANS https://static.www.nfl.com/image/upload/league/zx8d2rasyewxuusbhzae.pdf
// [5] 8 Tips For A Touchdown PE Flag Football Unit https://teachingpak.com/blog/teach-flag-football-unit/
// [6] Player Divisions and Rules https://www.fgsflag.com/Default.aspx?tabid=1430226
// [7] Seahawks Flag Football - Powered by UAL > Home https://www.seahawkflagfootball.com/Default.aspx?tabid=1817862&mid=1921542&newskeyid=HN1&newsid=501835&ctl=newsdetail
// [8] Flag Football Unit Plan http://33202576.weebly.com/uploads/1/4/6/8/14680198/flagfootballunitplan.pdf
// [9] Benefits of Youth Flag Football | Info for Parents https://playfootball.nfl.com/flag/benefits-of-flag-football/
// [10] NFL Flag Rules https://www.swyftflag.com/Default.aspx?tabid=1004749
