class Vehicle {
    brand:string
    date:string
    doors:number

    constructor(_brand:string, _date:string, _doors:number){
        this.brand = _brand;
        this.date = _date;
        this.doors = _doors;
    }

    speedUp = ():void => {
        console.log(`Brand: ${this.brand}, date: ${this.date}, doors: ${this.doors}`);
    }
}

const sedan = new Vehicle('Ford', '22-02-2022', 4);
console.log(sedan.brand);
sedan.speedUp();