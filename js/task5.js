// Напиши класс Car с указанными свойствами и методами.

class Car {
  constructor(car) {
    this._price = car.price;
    this.speed = 0;
    this.maxSpeed = car.maxSpeed;
    this.distance = 0;
    this.isOn = false;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance:  ${car.distance}, price:  ${car._price}`,
    );
  }

  set price(amount) {
    this._price = amount;
  }

  get price() {
    return this._price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    const newSpeed = this.speed + value;
    if (newSpeed < this.maxSpeed) {
      this.speed = newSpeed;
    }
  }

  decelerate(value) {
    const newSpeed = this.speed - value;
    if (newSpeed >= 0) {
      this.speed = newSpeed;
    }
  }

  drive(hours) {
    if (hours > 0 && this.isOn && this.speed > 0) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
