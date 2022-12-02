import fs from "fs";

const rules = {
  R: {
    plus: 1,
    name: "R",
    kills: "S",
    dies: "P"
  },
  P: {
    plus: 2,
    name: "P",
    kills: "R",
    dies: "S"
  },
  S: {
    plus: 3,
    name: "S",
    kills: "P",
    dies: "R"
  }
};

function gme(move, opp) {
  switch (move) {
    case "Z": {
      return rules[opp.dies];
    }
    case "Y": {
      return rules[opp.name];
    }
    case "X": {
      return rules[opp.kills];
    }
  }
}
const gopp = {
  A: rules.R,
  B: rules.P,
  C: rules.S
};
let score = 0;
const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((game) => {
    let opp = gopp[game[0]];
    let me = gme(game[2], opp);
    //let me = gme[game[2]];
    if (opp.name === me.name) {
      score += 3;
    } else if (opp.name === me.kills) {
      score += 6;
    } else if (opp.kills === me.name) {
      score += 0;
    }
    score += me.plus;
  });
console.log(score);
