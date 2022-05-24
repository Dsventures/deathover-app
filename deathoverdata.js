var teams = [
  ["Lucknow Super Giants", "lsg"],
  ["Rajasthan Royals", "rr"],
  ["Gujarat Titans", "gt"],
  ["Royal Challengers Bangalore", "rcb"],
];
// var teams = [
//   ["Delhi Capitals", "dc"],
//   ["Lucknow Super Giants", "lsg"],
//   ["Rajasthan Royals", "rr"],
//   ["Sunrisers Hyderabad", "sh"],
//   ["Gujarat Titans", "gt"],
// ];

// Lucknow Super Giants
// Rajasthan Royals
// Sunrisers Hyderabad
// Gujarat Titans

// var teams = [
//   ["Delhi Capitals", "dc"],
//   ["Kolkata Knight Riders", "kkr"],
//   ["Lucknow Super Giants", "lsg"],
//   ["Mumbai Indians", "mi"],
//   ["Punjab Kings", "pk"],
//   ["Rajasthan Royals", "rr"],
//   ["Royal Challengers Bangalore", "rcb"],
//   ["Sunrisers Hyderabad", "sh"],
//   ["Rising Pune Supergiant", "rps"],
//   ["Gujarat Titans", "gt"],
// ];

//
//

var abrev = {
  pk: "Punjab Kings",
  sh: "Sunrisers Hyderabad",
  gt: "Gujarat Titans",
  lsg: "Lucknow Super Giants",
  dc: "Delhi Capitals",
  nprr: "Not Playing (RR)",
  npdc: "Not Playing (DC)",
  kkr: "Kolkata Knight Riders",
  mi: "Mumbai Indians",
  rcb: "Royal Challengers Bangalore",
  gl: "Gujarat Lions",
  rr: "Rajasthan Royals",
  rps: "Rising Pune Supergiant",
  rcb: "Royal Challengers Bangalore",
};

var bowlers = {
  pk: ["Sandeep Sharma", "Kagiso Rabada", "Odean Smith"],
  sh: ["Jason Holder"],
  lsg: ["Dushmantha Chameera", "Andrew Tye", "Avesh Khan"],
  gt: ["Mohammad Shami", "Lockie Ferguson", "Hardik Pandya"],
};

var wicketFormulaData = [
  {
    sNo: "1",
    team: "Rajasthan Royals",
    playerName: "Trent Boult",
    "wicketDeathOvers(t20i)": "24",
    "oversBowledDeathOvers(t20i)": "44",
    "wickets/OversProbability(t20i)": "0.55",
    "wicketDeathOvers(ipl)": "43",
    "oversBowledDeathOvers(ipl)": "81",
    "wickets/OversProbability(ipl)": "0.53",
    againstTeam: "Lucknow Super Giants",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "1",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.36",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "35.9",
    for2Over: "71.8",
  },
  {
    sNo: "1",
    team: "Rajasthan Royals",
    playerName: "Trent Boult",
    "wicketDeathOvers(t20i)": "24",
    "oversBowledDeathOvers(t20i)": "44",
    "wickets/OversProbability(t20i)": "0.55",
    "wicketDeathOvers(ipl)": "43",
    "oversBowledDeathOvers(ipl)": "81",
    "wickets/OversProbability(ipl)": "0.53",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "4",
    "oversBowledDeathOvers(at)": "7",
    "wickets/OversProbability(at)": "0.57",
    "Probability of taking wicket": "0.55",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "54.9",
    for2Over: "109.8",
  },
  {
    sNo: "1",
    team: "Rajasthan Royals",
    playerName: "Trent Boult",
    "wicketDeathOvers(t20i)": "24",
    "oversBowledDeathOvers(t20i)": "44",
    "wickets/OversProbability(t20i)": "0.55",
    "wicketDeathOvers(ipl)": "43",
    "oversBowledDeathOvers(ipl)": "81",
    "wickets/OversProbability(ipl)": "0.53",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "8",
    "oversBowledDeathOvers(at)": "10",
    "wickets/OversProbability(at)": "0.8",
    "Probability of taking wicket": "0.63",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "62.5",
    for2Over: "125.1",
  },
  {
    sNo: "5",
    team: "Gujarat Titans",
    playerName: "Mohammad Shami",
    "wicketDeathOvers(t20i)": "14",
    "oversBowledDeathOvers(t20i)": "18",
    "wickets/OversProbability(t20i)": "0.78",
    "wicketDeathOvers(ipl)": "57",
    "oversBowledDeathOvers(ipl)": "78",
    "wickets/OversProbability(ipl)": "0.73",
    againstTeam: "Lucknow Super Giants",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "1",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.5",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "50.3",
    for2Over: "100.6",
  },
  {
    sNo: "5",
    team: "Gujarat Titans",
    playerName: "Mohammad Shami",
    "wicketDeathOvers(t20i)": "14",
    "oversBowledDeathOvers(t20i)": "18",
    "wickets/OversProbability(t20i)": "0.78",
    "wicketDeathOvers(ipl)": "57",
    "oversBowledDeathOvers(ipl)": "78",
    "wickets/OversProbability(ipl)": "0.73",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "11",
    "oversBowledDeathOvers(at)": "10",
    "wickets/OversProbability(at)": "1.1",
    "Probability of taking wicket": "0.87",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "87",
    for2Over: "173.9",
  },
  {
    sNo: "5",
    team: "Gujarat Titans",
    playerName: "Mohammad Shami",
    "wicketDeathOvers(t20i)": "14",
    "oversBowledDeathOvers(t20i)": "18",
    "wickets/OversProbability(t20i)": "0.78",
    "wicketDeathOvers(ipl)": "57",
    "oversBowledDeathOvers(ipl)": "78",
    "wickets/OversProbability(ipl)": "0.73",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "11",
    "oversBowledDeathOvers(at)": "13",
    "wickets/OversProbability(at)": "0.85",
    "Probability of taking wicket": "0.78",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "78.5",
    for2Over: "157",
  },
  {
    sNo: "6",
    team: "Lucknow Super Giants",
    playerName: "Dushmantha Chameera",
    "wicketDeathOvers(t20i)": "22",
    "oversBowledDeathOvers(t20i)": "51",
    "wickets/OversProbability(t20i)": "0.43",
    "wicketDeathOvers(ipl)": "3",
    "oversBowledDeathOvers(ipl)": "7",
    "wickets/OversProbability(ipl)": "0.43",
    againstTeam: "Gujarat Titans",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "1",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.29",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "28.7",
    for2Over: "57.3",
  },
  {
    sNo: "10",
    team: "Gujarat Titans",
    playerName: "Lockie Ferguson",
    "wicketDeathOvers(t20i)": "7",
    "oversBowledDeathOvers(t20i)": "9",
    "wickets/OversProbability(t20i)": "0.78",
    "wicketDeathOvers(ipl)": "12",
    "oversBowledDeathOvers(ipl)": "32",
    "wickets/OversProbability(ipl)": "0.38",
    againstTeam: "Lucknow Super Giants",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.38",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "38.4",
    for2Over: "76.9",
  },
  {
    sNo: "10",
    team: "Gujarat Titans",
    playerName: "Lockie Ferguson",
    "wicketDeathOvers(t20i)": "7",
    "oversBowledDeathOvers(t20i)": "9",
    "wickets/OversProbability(t20i)": "0.78",
    "wicketDeathOvers(ipl)": "12",
    "oversBowledDeathOvers(ipl)": "32",
    "wickets/OversProbability(ipl)": "0.38",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "1",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.38",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "38.4",
    for2Over: "76.9",
  },
  {
    sNo: "10",
    team: "Gujarat Titans",
    playerName: "Lockie Ferguson",
    "wicketDeathOvers(t20i)": "7",
    "oversBowledDeathOvers(t20i)": "9",
    "wickets/OversProbability(t20i)": "0.78",
    "wicketDeathOvers(ipl)": "12",
    "oversBowledDeathOvers(ipl)": "32",
    "wickets/OversProbability(ipl)": "0.38",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "3",
    "oversBowledDeathOvers(at)": "5",
    "wickets/OversProbability(at)": "0.6",
    "Probability of taking wicket": "0.58",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "58.4",
    for2Over: "116.9",
  },
  {
    sNo: "11",
    team: "Gujarat Titans",
    playerName: "Hardik Pandya",
    "wicketDeathOvers(t20i)": "14",
    "oversBowledDeathOvers(t20i)": "17",
    "wickets/OversProbability(t20i)": "0.82",
    "wicketDeathOvers(ipl)": "17",
    "oversBowledDeathOvers(ipl)": "27",
    "wickets/OversProbability(ipl)": "0.63",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "4",
    "oversBowledDeathOvers(at)": "5",
    "wickets/OversProbability(at)": "0.8",
    "Probability of taking wicket": "0.75",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "75.1",
    for2Over: "150.2",
  },
  {
    sNo: "11",
    team: "Gujarat Titans",
    playerName: "Hardik Pandya",
    "wicketDeathOvers(t20i)": "14",
    "oversBowledDeathOvers(t20i)": "17",
    "wickets/OversProbability(t20i)": "0.82",
    "wicketDeathOvers(ipl)": "17",
    "oversBowledDeathOvers(ipl)": "27",
    "wickets/OversProbability(ipl)": "0.63",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "3",
    "oversBowledDeathOvers(at)": "4",
    "wickets/OversProbability(at)": "0.75",
    "Probability of taking wicket": "0.73",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "73.4",
    for2Over: "146.9",
  },
  {
    sNo: "13",
    team: "Lucknow Super Giants",
    playerName: "Andrew Tye",
    "wicketDeathOvers(t20i)": "32",
    "oversBowledDeathOvers(t20i)": "50",
    "wickets/OversProbability(t20i)": "0.64",
    "wicketDeathOvers(ipl)": "24",
    "oversBowledDeathOvers(ipl)": "37",
    "wickets/OversProbability(ipl)": "0.65",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "6",
    "oversBowledDeathOvers(at)": "4",
    "wickets/OversProbability(at)": "1.5",
    "Probability of taking wicket": "0.93",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "93",
    for2Over: "185.9",
  },
  {
    sNo: "13",
    team: "Lucknow Super Giants",
    playerName: "Andrew Tye",
    "wicketDeathOvers(t20i)": "32",
    "oversBowledDeathOvers(t20i)": "50",
    "wickets/OversProbability(t20i)": "0.64",
    "wicketDeathOvers(ipl)": "24",
    "oversBowledDeathOvers(ipl)": "37",
    "wickets/OversProbability(ipl)": "0.65",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "2",
    "oversBowledDeathOvers(at)": "5",
    "wickets/OversProbability(at)": "0.4",
    "Probability of taking wicket": "0.56",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "56.3",
    for2Over: "112.6",
  },
  {
    sNo: "14",
    team: "Rajasthan Royals",
    playerName: "Navdeep Saini",
    "wicketDeathOvers(t20i)": "2",
    "oversBowledDeathOvers(t20i)": "7",
    "wickets/OversProbability(t20i)": "0.29",
    "wicketDeathOvers(ipl)": "12",
    "oversBowledDeathOvers(ipl)": "25",
    "wickets/OversProbability(ipl)": "0.48",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "4",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.26",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "25.5",
    for2Over: "51",
  },
  {
    sNo: "15",
    team: "Lucknow Super Giants",
    playerName: "Avesh Khan",
    "wicketDeathOvers(t20i)": "0",
    "oversBowledDeathOvers(t20i)": "2",
    "wickets/OversProbability(t20i)": "0",
    "wicketDeathOvers(ipl)": "18",
    "oversBowledDeathOvers(ipl)": "40",
    "wickets/OversProbability(ipl)": "0.45",
    againstTeam: "Gujarat Titans",
    "wicketDeathOvers(at)": "1",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "0.5",
    "Probability of taking wicket": "0.32",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "31.7",
    for2Over: "63.3",
  },
  {
    sNo: "15",
    team: "Lucknow Super Giants",
    playerName: "Avesh Khan",
    "wicketDeathOvers(t20i)": "0",
    "oversBowledDeathOvers(t20i)": "2",
    "wickets/OversProbability(t20i)": "0",
    "wicketDeathOvers(ipl)": "18",
    "oversBowledDeathOvers(ipl)": "40",
    "wickets/OversProbability(ipl)": "0.45",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "4",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.15",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "15",
    for2Over: "30",
  },
  {
    sNo: "15",
    team: "Lucknow Super Giants",
    playerName: "Avesh Khan",
    "wicketDeathOvers(t20i)": "0",
    "oversBowledDeathOvers(t20i)": "2",
    "wickets/OversProbability(t20i)": "0",
    "wicketDeathOvers(ipl)": "18",
    "oversBowledDeathOvers(ipl)": "40",
    "wickets/OversProbability(ipl)": "0.45",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "6",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.15",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "15",
    for2Over: "30",
  },
  {
    sNo: "17",
    team: "Royal Challengers Bangalore",
    playerName: "Josh Hazlewood",
    "wicketDeathOvers(t20i)": "13",
    "oversBowledDeathOvers(t20i)": "21",
    "wickets/OversProbability(t20i)": "0.62",
    "wicketDeathOvers(ipl)": "9",
    "oversBowledDeathOvers(ipl)": "18",
    "wickets/OversProbability(ipl)": "0.5",
    againstTeam: "Gujarat Titans",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.37",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "37.3",
    for2Over: "74.6",
  },
  {
    sNo: "17",
    team: "Royal Challengers Bangalore",
    playerName: "Josh Hazlewood",
    "wicketDeathOvers(t20i)": "13",
    "oversBowledDeathOvers(t20i)": "21",
    "wickets/OversProbability(t20i)": "0.62",
    "wicketDeathOvers(ipl)": "9",
    "oversBowledDeathOvers(ipl)": "18",
    "wickets/OversProbability(ipl)": "0.5",
    againstTeam: "Lucknow Super Giants",
    "wicketDeathOvers(at)": "2",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "1",
    "Probability of taking wicket": "0.71",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "70.6",
    for2Over: "141.3",
  },
  {
    sNo: "17",
    team: "Royal Challengers Bangalore",
    playerName: "Josh Hazlewood",
    "wicketDeathOvers(t20i)": "13",
    "oversBowledDeathOvers(t20i)": "21",
    "wickets/OversProbability(t20i)": "0.62",
    "wicketDeathOvers(ipl)": "9",
    "oversBowledDeathOvers(ipl)": "18",
    "wickets/OversProbability(ipl)": "0.5",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "1",
    "oversBowledDeathOvers(at)": "1",
    "wickets/OversProbability(at)": "1",
    "Probability of taking wicket": "0.71",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "70.6",
    for2Over: "141.3",
  },
  {
    sNo: "18",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "wicketDeathOvers(t20i)": "6",
    "oversBowledDeathOvers(t20i)": "13",
    "wickets/OversProbability(t20i)": "0.46",
    "wicketDeathOvers(ipl)": "41",
    "oversBowledDeathOvers(ipl)": "68",
    "wickets/OversProbability(ipl)": "0.6",
    againstTeam: "Gujarat Titans",
    "wicketDeathOvers(at)": "0",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "0",
    "Probability of taking wicket": "0.35",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "35.5",
    for2Over: "71",
  },
  {
    sNo: "18",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "wicketDeathOvers(t20i)": "6",
    "oversBowledDeathOvers(t20i)": "13",
    "wickets/OversProbability(t20i)": "0.46",
    "wicketDeathOvers(ipl)": "41",
    "oversBowledDeathOvers(ipl)": "68",
    "wickets/OversProbability(ipl)": "0.6",
    againstTeam: "Lucknow Super Giants",
    "wicketDeathOvers(at)": "1",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "0.5",
    "Probability of taking wicket": "0.52",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "52.1",
    for2Over: "104.3",
  },
  {
    sNo: "18",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "wicketDeathOvers(t20i)": "6",
    "oversBowledDeathOvers(t20i)": "13",
    "wickets/OversProbability(t20i)": "0.46",
    "wicketDeathOvers(ipl)": "41",
    "oversBowledDeathOvers(ipl)": "68",
    "wickets/OversProbability(ipl)": "0.6",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "9",
    "oversBowledDeathOvers(at)": "10",
    "wickets/OversProbability(at)": "0.9",
    "Probability of taking wicket": "0.65",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "65.5",
    for2Over: "131",
  },
  {
    sNo: "18",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "wicketDeathOvers(t20i)": "6",
    "oversBowledDeathOvers(t20i)": "13",
    "wickets/OversProbability(t20i)": "0.46",
    "wicketDeathOvers(ipl)": "41",
    "oversBowledDeathOvers(ipl)": "68",
    "wickets/OversProbability(ipl)": "0.6",
    againstTeam: "Royal Challengers Bangalore",
    "wicketDeathOvers(at)": "1",
    "oversBowledDeathOvers(at)": "2",
    "wickets/OversProbability(at)": "0.5",
    "Probability of taking wicket": "0.52",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "52.1",
    for2Over: "104.3",
  },
  {
    sNo: "20",
    team: "Royal Challengers Bangalore",
    playerName: "Mohammed Siraj",
    "wicketDeathOvers(t20i)": "2",
    "oversBowledDeathOvers(t20i)": "6",
    "wickets/OversProbability(t20i)": "0.33",
    "wicketDeathOvers(ipl)": "24",
    "oversBowledDeathOvers(ipl)": "61",
    "wickets/OversProbability(ipl)": "0.39",
    againstTeam: "Rajasthan Royals",
    "wicketDeathOvers(at)": "3",
    "oversBowledDeathOvers(at)": "8",
    "wickets/OversProbability(at)": "0.38",
    "Probability of taking wicket": "0.37",
    "overBowled(1)": "1",
    "overBowled(2)": "2",
    for1Over: "36.7",
    for2Over: "73.5",
  },
];

var ecoFormulaData = [
  {
    sNo: "1",
    team: "Rajasthan Royals",
    playerName: "Trent Boult",
    "economy(t20i)": "8.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.4",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "16.0",
    "strikeRate(ipl)": "18.5",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "8.4",
    "weightage(at)": "0.3",
    "strikeRate(at)": "14.8",
    economySum: "24.9",
    percentageSum: "1.0",
    ecoFinal: "24.9",
    ouput: "8.3",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.3",
    for2Overs: "16.6",
  },
  {
    sNo: "1",
    team: "Rajasthan Royals",
    playerName: "Trent Boult",
    "economy(t20i)": "8.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.4",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "16.0",
    "strikeRate(ipl)": "18.5",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "7.9",
    "weightage(at)": "0.3",
    "strikeRate(at)": "20.0",
    economySum: "24.4",
    percentageSum: "1.0",
    ecoFinal: "24.4",
    ouput: "8.1",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.1",
    for2Overs: "16.3",
  },
  {
    sNo: "1",
    team: "Rajasthan Royals",
    playerName: "Trent Boult",
    "economy(t20i)": "8.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.4",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "16.0",
    "strikeRate(ipl)": "18.5",
    againstTeam: "Lucknow Super Giants",
    "economy(at)": "7.5",
    "weightage(at)": "0.3",
    "strikeRate(at)": "12.0",
    economySum: "24.0",
    percentageSum: "1.0",
    ecoFinal: "24.0",
    ouput: "8.0",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.0",
    for2Overs: "16.0",
  },
  {
    sNo: "5",
    team: "Gujarat Titans",
    playerName: "Mohammad Shami",
    "economy(t20i)": "9.5",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.5",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "19.8",
    "strikeRate(ipl)": "20.9",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "9.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "17.8",
    economySum: "27.1",
    percentageSum: "1.0",
    ecoFinal: "27.1",
    ouput: "9.0",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.0",
    for2Overs: "18.1",
  },
  {
    sNo: "5",
    team: "Gujarat Titans",
    playerName: "Mohammad Shami",
    "economy(t20i)": "9.5",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.5",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "19.8",
    "strikeRate(ipl)": "20.9",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "8.9",
    "weightage(at)": "0.3",
    "strikeRate(at)": "17.5",
    economySum: "27.0",
    percentageSum: "1.0",
    ecoFinal: "27.0",
    ouput: "9.0",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.0",
    for2Overs: "18.0",
  },
  {
    sNo: "5",
    team: "Gujarat Titans",
    playerName: "Mohammad Shami",
    "economy(t20i)": "9.5",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.5",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "19.8",
    "strikeRate(ipl)": "20.9",
    againstTeam: "Lucknow Super Giants",
    "economy(at)": "6.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "8.0",
    economySum: "24.3",
    percentageSum: "1.0",
    ecoFinal: "24.3",
    ouput: "8.1",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.1",
    for2Overs: "16.2",
  },
  {
    sNo: "6",
    team: "Lucknow Super Giants",
    playerName: "Dushmantha Chameera",
    "economy(t20i)": "8.0",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.6",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "21.3",
    "strikeRate(ipl)": "21.6",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "10.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "9.0",
    economySum: "27.9",
    percentageSum: "1.0",
    ecoFinal: "27.9",
    ouput: "9.3",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.3",
    for2Overs: "18.6",
  },
  {
    sNo: "6",
    team: "Lucknow Super Giants",
    playerName: "Dushmantha Chameera",
    "economy(t20i)": "8.0",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.6",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "21.3",
    "strikeRate(ipl)": "21.6",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "5.5",
    "weightage(at)": "0.3",
    "strikeRate(at)": "-",
    economySum: "23.0",
    percentageSum: "1.0",
    ecoFinal: "23.0",
    ouput: "7.7",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "7.7",
    for2Overs: "15.3",
  },
  {
    sNo: "6",
    team: "Lucknow Super Giants",
    playerName: "Dushmantha Chameera",
    "economy(t20i)": "8.0",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.6",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "21.3",
    "strikeRate(ipl)": "21.6",
    againstTeam: "Gujarat Titans",
    "economy(at)": "7.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "9.0",
    economySum: "24.9",
    percentageSum: "1.0",
    ecoFinal: "24.9",
    ouput: "8.3",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.3",
    for2Overs: "16.6",
  },
  {
    sNo: "10",
    team: "Gujarat Titans",
    playerName: "Lockie Ferguson",
    "economy(t20i)": "7.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "13.0",
    "strikeRate(ipl)": "19.5",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "6.1",
    "weightage(at)": "0.3",
    "strikeRate(at)": "15.4",
    economySum: "21.4",
    percentageSum: "1.0",
    ecoFinal: "21.4",
    ouput: "7.1",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "7.1",
    for2Overs: "14.3",
  },
  {
    sNo: "10",
    team: "Gujarat Titans",
    playerName: "Lockie Ferguson",
    "economy(t20i)": "7.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "13.0",
    "strikeRate(ipl)": "19.5",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "5.1",
    "weightage(at)": "0.3",
    "strikeRate(at)": "8.0",
    economySum: "20.4",
    percentageSum: "1.0",
    ecoFinal: "20.4",
    ouput: "6.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "6.8",
    for2Overs: "13.6",
  },
  {
    sNo: "10",
    team: "Gujarat Titans",
    playerName: "Lockie Ferguson",
    "economy(t20i)": "7.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "13.0",
    "strikeRate(ipl)": "19.5",
    againstTeam: "Lucknow Super Giants",
    "economy(at)": "6.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "-",
    economySum: "21.3",
    percentageSum: "1.0",
    ecoFinal: "21.3",
    ouput: "7.1",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "7.1",
    for2Overs: "14.2",
  },
  {
    sNo: "11",
    team: "Gujarat Titans",
    playerName: "Hardik Pandya",
    "economy(t20i)": "8.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.9",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "20.0",
    "strikeRate(ipl)": "21.3",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "10.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "25.2",
    economySum: "27.1",
    percentageSum: "1.0",
    ecoFinal: "27.1",
    ouput: "9.0",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.0",
    for2Overs: "18.1",
  },
  {
    sNo: "11",
    team: "Gujarat Titans",
    playerName: "Hardik Pandya",
    "economy(t20i)": "8.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.9",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "20.0",
    "strikeRate(ipl)": "21.3",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "9.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "17.6",
    economySum: "26.5",
    percentageSum: "1.0",
    ecoFinal: "26.5",
    ouput: "8.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.8",
    for2Overs: "17.7",
  },
  {
    sNo: "11",
    team: "Gujarat Titans",
    playerName: "Hardik Pandya",
    "economy(t20i)": "8.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.9",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "20.0",
    "strikeRate(ipl)": "21.3",
    againstTeam: "Lucknow Super Giants",
    "economy(at)": "9.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "-",
    economySum: "26.4",
    percentageSum: "1.0",
    ecoFinal: "26.4",
    ouput: "8.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.8",
    for2Overs: "17.6",
  },
  {
    sNo: "13",
    team: "Lucknow Super Giants",
    playerName: "Andrew Tye",
    "economy(t20i)": "8.8",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.6",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "14.5",
    "strikeRate(ipl)": "16.3",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "7.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "30.0",
    economySum: "24.6",
    percentageSum: "1.0",
    ecoFinal: "24.6",
    ouput: "8.2",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.2",
    for2Overs: "16.4",
  },
  {
    sNo: "13",
    team: "Lucknow Super Giants",
    playerName: "Andrew Tye",
    "economy(t20i)": "8.8",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.6",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "14.5",
    "strikeRate(ipl)": "16.3",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "7.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "8.0",
    economySum: "24.6",
    percentageSum: "1.0",
    ecoFinal: "24.6",
    ouput: "8.2",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.2",
    for2Overs: "16.4",
  },
  {
    sNo: "14",
    team: "Rajasthan Royals",
    playerName: "Navdeep Saini",
    "economy(t20i)": "7.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.7",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "15.2",
    "strikeRate(ipl)": "31.1",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "12.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "18.0",
    economySum: "27.8",
    percentageSum: "1.0",
    ecoFinal: "27.8",
    ouput: "9.3",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.3",
    for2Overs: "18.5",
  },
  {
    sNo: "14",
    team: "Rajasthan Royals",
    playerName: "Navdeep Saini",
    "economy(t20i)": "7.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.7",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "15.2",
    "strikeRate(ipl)": "31.1",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "8.8",
    "weightage(at)": "0.3",
    "strikeRate(at)": "78.0",
    economySum: "24.6",
    percentageSum: "1.0",
    ecoFinal: "24.6",
    ouput: "8.2",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.2",
    for2Overs: "16.4",
  },
  {
    sNo: "15",
    team: "Lucknow Super Giants",
    playerName: "Avesh Khan",
    "economy(t20i)": "8.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "24.0",
    "strikeRate(ipl)": "17.7",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "7.3",
    "weightage(at)": "0.3",
    "strikeRate(at)": "72.0",
    economySum: "23.7",
    percentageSum: "1.0",
    ecoFinal: "23.7",
    ouput: "7.9",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "7.9",
    for2Overs: "15.8",
  },
  {
    sNo: "15",
    team: "Lucknow Super Giants",
    playerName: "Avesh Khan",
    "economy(t20i)": "8.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "24.0",
    "strikeRate(ipl)": "17.7",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "9.1",
    "weightage(at)": "0.3",
    "strikeRate(at)": "16.8",
    economySum: "25.5",
    percentageSum: "1.0",
    ecoFinal: "25.5",
    ouput: "8.5",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.5",
    for2Overs: "17.0",
  },
  {
    sNo: "15",
    team: "Lucknow Super Giants",
    playerName: "Avesh Khan",
    "economy(t20i)": "8.1",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "24.0",
    "strikeRate(ipl)": "17.7",
    againstTeam: "Gujarat Titans",
    "economy(at)": "9.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "22.0",
    economySum: "25.4",
    percentageSum: "1.0",
    ecoFinal: "25.4",
    ouput: "8.5",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "8.5",
    for2Overs: "16.9",
  },
  {
    sNo: "19",
    team: "Gujarat Titans",
    playerName: "Yash Dayal",
    "economy(t20i)": "",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "8.2",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "",
    "strikeRate(ipl)": "22.3",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "10.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "8.0",
    economySum: "18.2",
    percentageSum: "1.0",
    ecoFinal: "18.2",
    ouput: "6.1",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "6.1",
    for2Overs: "12.1",
  },
  {
    sNo: "21",
    team: "Royal Challengers Bangalore",
    playerName: "Josh Hazlewood",
    "economy(t20i)": "11.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.4",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "17.6",
    "strikeRate(ipl)": "18.2",
    againstTeam: "Gujarat Titans",
    "economy(at)": "18.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "#DIV/0!",
    economySum: "38.5",
    percentageSum: "1.0",
    ecoFinal: "38.5",
    ouput: "12.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "12.8",
    for2Overs: "25.7",
  },
  {
    sNo: "21",
    team: "Royal Challengers Bangalore",
    playerName: "Josh Hazlewood",
    "economy(t20i)": "11.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.4",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "17.6",
    "strikeRate(ipl)": "18.2",
    againstTeam: "Lucknow Super Giants",
    "economy(at)": "6.5",
    "weightage(at)": "0.3",
    "strikeRate(at)": "6.5",
    economySum: "27.0",
    percentageSum: "1.0",
    ecoFinal: "27.0",
    ouput: "9.0",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.0",
    for2Overs: "18.0",
  },
  {
    sNo: "21",
    team: "Royal Challengers Bangalore",
    playerName: "Josh Hazlewood",
    "economy(t20i)": "11.2",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.4",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "17.6",
    "strikeRate(ipl)": "18.2",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "12.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "12.0",
    economySum: "32.5",
    percentageSum: "1.0",
    ecoFinal: "32.5",
    ouput: "10.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "10.8",
    for2Overs: "21.7",
  },
  {
    sNo: "22",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "economy(t20i)": "11.6",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.8",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "25.2",
    "strikeRate(ipl)": "15.6",
    againstTeam: "Gujarat Titans",
    "economy(at)": "9.5",
    "weightage(at)": "0.3",
    "strikeRate(at)": "#DIV/0!",
    economySum: "30.9",
    percentageSum: "1.0",
    ecoFinal: "30.9",
    ouput: "10.3",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "10.3",
    for2Overs: "20.6",
  },
  {
    sNo: "22",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "economy(t20i)": "11.6",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.8",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "25.2",
    "strikeRate(ipl)": "15.6",
    againstTeam: "Lucknow Super Giants",
    "economy(at)": "11.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "22.0",
    economySum: "32.4",
    percentageSum: "1.0",
    ecoFinal: "32.4",
    ouput: "10.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "10.8",
    for2Overs: "21.6",
  },
  {
    sNo: "22",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "economy(t20i)": "11.6",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.8",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "25.2",
    "strikeRate(ipl)": "15.6",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "8.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "8.9",
    economySum: "29.4",
    percentageSum: "1.0",
    ecoFinal: "29.4",
    ouput: "9.8",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "9.8",
    for2Overs: "19.6",
  },
  {
    sNo: "22",
    team: "Royal Challengers Bangalore",
    playerName: "Harshal Patel",
    "economy(t20i)": "11.6",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "9.8",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "25.2",
    "strikeRate(ipl)": "15.6",
    againstTeam: "Royal Challengers Bangalore",
    "economy(at)": "12.0",
    "weightage(at)": "0.3",
    "strikeRate(at)": "24.0",
    economySum: "33.4",
    percentageSum: "1.0",
    ecoFinal: "33.4",
    ouput: "11.1",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "11.1",
    for2Overs: "22.3",
  },
  {
    sNo: "24",
    team: "Royal Challengers Bangalore",
    playerName: "Mohammed Siraj",
    "economy(t20i)": "13.0",
    "weightage(t20i)": "0.3",
    "economy(ipl)": "10.5",
    "weightage(ipl)": "0.3",
    "strikeRate(t20i)": "39.0",
    "strikeRate(ipl)": "25.9",
    againstTeam: "Rajasthan Royals",
    "economy(at)": "11.4",
    "weightage(at)": "0.3",
    "strikeRate(at)": "30.3",
    economySum: "34.9",
    percentageSum: "1.0",
    ecoFinal: "34.9",
    ouput: "11.6",
    "oversBowled(1)": "1",
    "oversBowled(2)": "2",
    for1Over: "11.6",
    for2Overs: "23.3",
  },
];
