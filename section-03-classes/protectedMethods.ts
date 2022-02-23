class Father {
    name:string
    protected age:number

    constructor(_name:string, _age:number){
        this.name = _name;
        this.age = _age;
    }

    showName():void {
        console.log(this.name);
    }
}

class Son extends Father {
    surname:string

    constructor(_name:string, _age:number, _surname:string){
        super(_name, _age);
        this.surname = _surname;
    }

    showSonName():void {
        console.log(this.name);
    }
}

const son = new Son('Juan', 32, 'Gómez');
// console.log(son.name, son.age, son.surname, son.showName(), son.showSonName());