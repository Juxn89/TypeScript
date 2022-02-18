var number = 5;
let myMame = 'Juan';
const age = 32;

/* Using TypeScript */
let otherNumber:number = 15;
let surName:string = 'Gómez';
const otherAge:number = 31;


/* Boolean */
let isAuthenticated:boolean = false;
isAuthenticated = true;

// Throw a error
//isAuthenticated = 1;

/* Number */
let number01:number = 100;

/* String */
let myString:string = 'Juan';
let myString2:string = "Gómez";
const myFullName:string = `${myString} ${myString2}`;
console.log(myFullName);

/* Arrays */
let myArrayNumber:number[] = [1, 2, 3, 4];
let myArrayString:string[] = ['A', 'B', 'C', 'D'];
let myArrayBooelan:boolean[] = [true, false, false, true];
let myArrayAny:Array<any> = [1, true, 'A'];
let myTuple: [number, string, boolean] = [1, 'String', true];
console.log(myTuple[1]);
