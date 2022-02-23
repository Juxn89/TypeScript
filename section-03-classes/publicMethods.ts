class Annimal {
    public name:string
    public size:number

    public constructor(_name:string, _size:number) {
        this.name = _name;
        this.size = _size;
    }

    public move():void {
        console.log(`I'm moving...`);
    }
}

const obj = new Annimal('Snake', 2);
obj.move();