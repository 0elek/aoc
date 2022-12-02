import fs from "fs";

const input = fs.readFileSync("input.txt", "utf-8").split("\n");

let gamma = "";
let epsilon = "";

input.forEach((line) => {
  let o = 0;
  let i = 0;
  line.split("").forEach((char) => {
    if (char == 0) o++;
    if (char == 1) i++;
  });
  if (i > o) {
    gamma += "1";
    epsilon += "0";
  } else {
    gamma += "0";
    epsilon += "1";
  }
});

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
