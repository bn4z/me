#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
  padding: 0,
  margin: 1,
  borderStyle: "round",
  borderColor: "blue"
};
const fs = require("fs");
const path = require("path");

let output = `
             ${chalk.blue.bold("Benoît Berthoud")}
 --------------------------------------- 
          React Redux developer

 https://${chalk.blue("github")}.com/${chalk.yellow("bn4z")} 
 https://${chalk.blue("linkedin")}.com/in/${chalk.yellow("benoit-berthoud")}
 https://${chalk.blue("lepogona")}.com (personal project)
 --------------------------------------- 
                     ${chalk.yellow("benoit@8vectors.com")}`;

const [, ...trimmed] = output.split("\n");
const card = chalk.white(boxen(trimmed.join("\n"), options));
fs.writeFileSync(path.join(__dirname, "bin/output"), card);
console.log(card);
