console.log('task-05');
console.log('');

interface IParamsCar {
  speed: number;
  price: number;
  maxSpeed: number;
  isOn: boolean;
  distance: number;
}

class Car {
  static getSpecs(car: IParamsCar): void {
    console.table(car);
  }

  speed: number;
  private _price: number;
  maxSpeed: number;
  isOn: boolean;
  distance: number;

  constructor({ price, maxSpeed }: { price: number; maxSpeed: number }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value: number) {
    if (this.isOn && value + this.speed < this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value: number) {
    if (this.isOn && this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours: number) {
    if (this.isOn) {
      this.distance += this.speed * hours;
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

export {};
