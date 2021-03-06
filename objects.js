function objShowProps(obj, obj_name) {
    var result = "";
    for (i in obj) {
        result += obj_name + "." + i + " = " + obj[i] + "<br>";
    }
    return result;
}

function Car(manufacturer, model, doors) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.doors = doors;
    this.getManufacturer = function () {
        return this.manufacturer;
    };
    this.getModel = function () {
        return this.model;
    };
}

Car.prototype.wheels = 4;
Car.prototype.getWheels = function () {
    return this.wheels;
}

car = new Car("Lamborghini", "Diablo", 2);
another_car = new Car("Chevrolet", "Corvette", 2);


window.onload = function () {
    body = document.getElementsByTagName('body')[0];

    p = document.createElement('p');
    p.innerHTML = objShowProps(car, "Car") + "<br>" + objShowProps(another_car, "Car");

    body.appendChild(p);
}
