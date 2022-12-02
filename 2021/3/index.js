import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

let gamma = "";
let epi = "";

let vertical = [];

// part 1

for (let i = 0; i < 12; i++) {
  vertical[i] = { 0: 0, 1: 0 };
}
input.forEach((line) => {
  line.split("").forEach((b, index) => {
    vertical[index][b.toString()]++;
  });
});
vertical.forEach((e) => {
  gamma += e[1] == Math.max(e[0], e[1]) ? "1" : "0";
});
vertical.forEach((e) => {
  epi += e[1] == Math.min(e[0], e[1]) ? "1" : "0";
});

console.log("first= ", parseInt(gamma, 2) * parseInt(epi, 2));
let res = [];

// 2nd

function filter(array, index, mode) {
  let strip = [...array].map((e) => e.at(index));

  let count = new Array();
  strip.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  let remove =
    mode == 0
      ? count["0"] > count["1"]
        ? "1"
        : "0"
      : count["0"] < count["1"] || count["0"] == count["1"]
      ? "1"
      : "0";

  let DONE = [...array].filter((e) => e.at(index) == remove);

  if (DONE.length > 1) {
    filter(DONE, index + 1, mode);
  } else {
    res.push(parseInt(DONE.join(""), 2));
  }
}

filter(input, 0, 0);
filter(input, 0, 1);
console.log("second= " + res[0] * res[1]);
