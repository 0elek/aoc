import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8");
let g = [];
let res = 0;

const value = (x) => {
  let charC = x.charCodeAt(0);
  return charC > 96 ? charC - 96 : charC - 38;
};
const RuckSacks = input.split("\n");
RuckSacks.forEach((Sack) => {
  const h = Sack.length / 2;
  let Half1 = new Set(Sack.substring(0, h).split(""));
  let Half2 = new Set(Sack.substring(h).split(""));

  for (let x of Half1.values()) {
    if (Half2.has(x)) {
      res += value(x);
    }
  }
});
console.log("first ", res);
for (let i = 0; i < RuckSacks.length; i = i + 3) {
  g.push([
    RuckSacks[i].split(""),
    RuckSacks[i + 1].split(""),
    RuckSacks[i + 2].split("")
  ]);
}
const res2 = g
  .map((group) => {
    return group.reduce((a, b) => a.filter((c) => b.includes(c)));
  })
  .reduce((perv, now) => perv + value(...now), 0);

console.log("second: ", res2);
