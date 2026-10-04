import { Converter } from "./Converter.js";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

// Creates the converter
const converter = new Converter();

// Keeps the program running
let running = true;

// Allows the program to talk to the terminal
const readline = createInterface({
    input: stdin,
    output: stdout,
});

// Main program loop
while (running) {

    const input = await readline.question(
        "\nEnter a value you want to covert or 0 to quit: "
    );

    // Exit the program
    if (input === "0") {
        running = false;
        continue;
    }

    const inFormat = await readline.question(
        "\nWhat is the value format? Choose input format:\n" +
        "1. ASCII\n" +
        "2. Hexadecimal\n" +
        "3. Binary\n" +
        "> "
    );

    const outFormat = await readline.question(
        "\nChoose output format:\n" +
        "1. ASCII\n" +
        "2. Hexadecimal\n" +
        "3. Binary\n" +
        "> "
    );

    // ASCII to Hex
    if (inFormat === "1" && outFormat === "2") {

        const result = converter.toHex(input);

        console.log("\nResult:", result.join(" "));
    }

    // ASCII to Binary
    else if (inFormat === "1" && outFormat === "3") {

        const result = converter.toBinary(input);

        console.log("\nResult:", result.join(" "));
    }

    // Hex to ASCII
    else if (inFormat === "2" && outFormat === "1") {

        const result = converter.hexToASCII(input);

        console.log("\nResult:", result);
    }

    // Hex to Binary
    else if (inFormat === "2" && outFormat === "3") {

        const result = converter.hexToBinary(input);

        console.log("\nResult:", result.join(" "));
    }

    // Binary to ASCII
    else if (inFormat === "3" && outFormat === "1") {

        const result = converter.binaryToASCII(input);

        console.log("\nResult:", result);
    }

    // Binary to Hex
    else if (inFormat === "3" && outFormat === "2") {

        const result = converter.binaryToHex(input);

        console.log("\nResult:", result.join(" "));
    }
}

// Close the terminal
readline.close();
