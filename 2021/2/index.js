import fs from "fs";

const input = fs.readFileSync("input.txt", "utf8").split("\n");

let commands = [];
input.forEach((line, i) => {
  let [command, value] = line.split(" ");
  commands[i] = { command, value };
});

let aim = 0 
let hor = 0 
let dep = 0
commands.forEach((command, i) => {
  console.log(command , i );
  let c = parseInt(command.value);
  if (command.command == "up") {
    aim -= c
  }
  else if (command.command == "down") {
    aim += c
  }
  else if (command.command == "forward") {
    hor += c
    dep += aim * c 


// It increases your horizontal position by X units.
// It increases your depth by your aim multiplied by X.
  }
});
console.log(hor * dep)
