const output = document.getElementById("output");


const cars = {
    type: "passenger vehicle",
    wheels: 4,
    engine: true,
    max_passengers: 8,
    windows: 4,
    sell() {
        output.innerText += "I am sold.\n";
    },
    drive() {
       output.innerText += "I am driving.\n";
    }
};

cars.sell();
cars.drive();

function Car(make, model, year, vin) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.vin = vin;    
}

const hondaCivic001 = new Car("Honda", "Civic", 1972, "2HGEH2342NH5001972");
const hondaCivic002 = new Car("Honda", "Civic", 1973, "2HGEH2342NH5001973");
const hondaCivic003 = new Car("Honda", "Civic", 1974, "2HGEH2342NH5001974");

function displayCar(car) {
    output.innerText += `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, VIN: ${car.vin}\n`;
}

displayCar(hondaCivic001);
displayCar(hondaCivic002);
displayCar(hondaCivic003);
console.log(hondaCivic001);
