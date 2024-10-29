/*Question # 55: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.*/
function createCar(manufacturer: string, model: string, ...args: any[]){
    let car: any = {
        manufacturerOfCar: manufacturer,
        modelOfCar: model,  
    }
    console.log(args.length)
        for (let i = 0; i < args.length; i++) {
            let arg = args[i];
            let keys = Object.keys(arg);
            for (let j = 0; j < keys.length; j++) {
                const key = keys[j];
                car[key] = arg[key];
            }
        }
        return car;
    }
let carInfo = createCar("Toyota", "Camry", {color: "Blue"}, {optionalFeature: "Sunroof"});
console.log(carInfo)