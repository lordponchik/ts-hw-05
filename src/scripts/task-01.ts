console.log('task-01');
console.log('');

type Account = { login: string; email: string };

function Account(this: any, { login, email }: Account) {
  this.login = login;
  this.email = email;

  this.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}
`);
  };
}

console.log(Account.prototype.getInfo); // function

const mango = new (Account as any)({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new (Account as any)({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

export {};
