import fs from "fs";

let topcals = [];
const input = fs
  .readFileSync("input.txt", "utf8")
  .split("\n\n")
  .forEach((elf) => {
    let cookies = elf.split("\n");
    let cals = 0;

    cookies = cookies.map((cookie) => (cals += parseInt(cookie)));
    topcals.push(cals);
  });

topcals.sort((a, b) => b - a);
console.log(topcals[0] + topcals[1] + topcals[2]);
