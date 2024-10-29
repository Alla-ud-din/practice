"use strict";
function createCar(manufacturer, model, ...args) {
    let car = {
        manufacturerOfCar: manufacturer,
        modelOfCar: model,
    };
    console.log(args.length);
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        let keys = Object.keys(arg);
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            console.log(key);
            car[key] = arg[key];
            console.log(car[key]);
        }
    }
    return car;
}
let carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { optionalFeature: "Sunroof" });
console.log(carInfo);
