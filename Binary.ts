export class Binary {
    convert(value: number): string {
        return value.toString(2).padStart(8, "0");;
    }
}