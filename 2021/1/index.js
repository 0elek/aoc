import fs from "fs";
let input = fs.readFileSync("input.txt", "utf8").split("\n");

input = input.map((string) => string = parseInt(string));
console.log(typeof input[0]);
let increases = 0;
for (let i = 0; i < input.length; i++) {
  if (
    typeof input[i] == "number" &&
    typeof input[i + 1] == "number" &&
    typeof input[i + 2] == "number" &&
    typeof input[i + 3] == "number"
  ) {
    let A = input[i] + input[i + 1] + input[i + 2];
    let B = input[i + 1] + input[i + 2] + input[i + 3];
    console.log(A, B);
    if (B > A) {
      increases++;
    }
  }
}

console.log(increases);
