import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf8");

const list = input.split("\n").map(e => e.split(","));
let part1 = 0;
let part2 = 0;
list.forEach((e) => {

    const a = e[0].split("-").map(e => parseInt(e));
    const b = e[1].split("-").map(e => parseInt(e));

    if ((a[0] <= b[0] && a[1] >= b[1]) || (b[0] <= a[0] && b[1] >= a[1])) {
        part1++;
        part2++;
        // part 2
    } else if (a[0] <= b[1] && a[1] >= b[0]) {
        part2++;
    } else if (b[0] <= a[1] && b[1] >= a[0]) {
        part2++;
    }


})
console.log(part1, part2)

