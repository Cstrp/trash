function addNumbers(x: number, y: number) {
    return x + y;
}

console.log(addNumbers(3, 6));

const a: string = '1';
const b = 3.14;

enum Lol {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: Lol = Lol.Apprentice;
console.log(employeeStatus);
console.log(Lol[employeeStatus]);

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const lol: Rect = {
    id: '1234',
    size: {
        width: 1,
        height: 2,
    },
    color: 'blue'
}