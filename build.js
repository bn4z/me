#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
  padding: 0,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan"
};
const fs = require("fs");
const path = require("path");

let output = `
             ${chalk.cyan.bold("Benoît Berthoud")}
 --------------------------------------- 
          React Redux developer

 https://${chalk.green("github")}.com/${chalk.cyan("bn4z")} 
 https://${chalk.green("lepogona")}.com (personal project)
 https://${chalk.green("linkedin")}.com/in/${chalk.cyan("benoit-berthoud")}
 --------------------------------------- 
                     ${chalk.cyan("benoit@8vectors.com")}`;

const [, ...trimmed] = output.split("\n");
const card = chalk.white(boxen(trimmed.join("\n"), options));
fs.writeFileSync(path.join(__dirname, "bin/output"), card);
console.log(card);
