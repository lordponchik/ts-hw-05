import"./modulepreload-polyfill-B5Qt9EMX.js";console.log("task-01");console.log("");function o({login:n,email:l}){this.login=n,this.email=l,this.getInfo=function(){console.log(`Login: ${this.login}, Email: ${this.email}
`)}}console.log(o.prototype.getInfo);const i=new o({login:"Mangozedog",email:"mango@dog.woof"});i.getInfo();const g=new o({login:"Poly",email:"poly@mail.com"});g.getInfo();
