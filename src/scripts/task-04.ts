console.log('task-04');
console.log('');

class StringBuilder {
  private _value: string;

  constructor(initialValue: string) {
    this._value = initialValue;
  }

  get value(): string {
    return this._value;
  }

  append(str: string): void {
    this._value += str;
  }

  prepend(str: string): void {
    this._value = str + this._value;
  }

  pad(str: string): void {
    this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

export {};
