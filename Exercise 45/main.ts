

function make_car (manufacturer: string, model: string, ...options: any){
    const car ={
        manufacturer,
        model,
        ...Object.fromEntries(options)
    };
    return car;
};
const myCar = make_car("Toyota","Corolla",['color', 'blue'],['year', '2022']);
console.log(myCar);
