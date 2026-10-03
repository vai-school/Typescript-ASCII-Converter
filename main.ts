// import classes here
import { ASCII } from "./ASCII.js";
import { Hex } from "./Hex.js";
import { Binary } from "./Binary.js";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

// The object oriented programming portion, these are the classes
const ascii = new ASCII();
const hex = new Hex();
const binary = new Binary();

// allows the "talking" to the terminal
const readline = createInterface({
  input: stdin,
  output: stdout,
});

readline.question("Enter a word or sentence: ", (input) => {
  readline.question(
    "Choose conversion:\n 1. Hexadecimal\n 2. Binary\n> ",
    (choice) => {
      if (choice === "1") {
        console.log("Hexadecimal selected");
      } else if (choice === "2") {
        console.log("Binary selected");
      }

      readline.close();
    }
  );
});