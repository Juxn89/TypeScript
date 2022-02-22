const paramDefault = (name:string, surname:string, age:number = 10):void => {
    if(age > 0)
        console.log(`Se llama ${name} su apellido es ${surname} y su edad es ${age}`);
    else
        console.log(`Se llama ${name} su apellido es ${surname}`);
}

paramDefault('Juan', 'Gómez', 32);
paramDefault('Carlos', 'Bermúdez');