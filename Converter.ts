export class Converter {

    // Converts ASCII characters into decimal numbers
    private toDecimal(input: string): number[] {
        const output: number[] = [];

        for (let i = 0; i < input.length; i++) {
            output.push(input.charCodeAt(i));
        }

        return output;
    }

    // ASCII to Hexadecimal
    toHex(input: string): string[] {
        const decimal = this.toDecimal(input);

        return decimal.map((num) =>
            num.toString(16).toUpperCase()
        );
    }

    // ASCII to Binary
    toBinary(input: string): string[] {
        const decimal = this.toDecimal(input);

        return decimal.map((num) =>
            num.toString(2).padStart(8, "0")
        );
    }

    // Hexadecimal to ASCII
    hexToASCII(input: string): string {
        const values = input.split(" ");
        let output = "";

        for (const value of values) {
            const decimal = parseInt(value, 16);

            output += String.fromCharCode(decimal);
        }

        return output;
    }

    // Binary to ASCII
    binaryToASCII(input: string): string {
        const values = input.split(" ");
        let output = "";

        for (const value of values) {

            const decimal = parseInt(value, 2);

            output += String.fromCharCode(decimal);
        }

        return output;
    }

    // Hexadecimal to Binary
    hexToBinary(input: string): string[] {
        const values = input.split(" ");
        const output: string[] = [];

        for (const value of values) {
            const decimal = parseInt(value, 16);

            output.push(
                decimal.toString(2).padStart(8, "0")
            );
        }

        return output;
    }

    // Binary to Hexadecimal
    binaryToHex(input: string): string[] {
        const values = input.split(" ");
        const output: string[] = [];

        for (const value of values) {

            const decimal = parseInt(value, 2);

            output.push(
                decimal.toString(16).toUpperCase()
            );
        }

        return output;
    }
}