const optionals = (name:string, surname:string, age?:number):void => {
    if(age)
        console.log(`Se llama ${name} su apellido es ${surname} y su edad es ${age}`);
    else
        console.log(`Se llama ${name} su apellido es ${surname}`);
}

optionals('Juan', 'Gómez', 32);
optionals('Carlos', 'Bermúdez');