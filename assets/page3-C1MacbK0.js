var g=Object.defineProperty;var l=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>l(t,typeof e!="symbol"?e+"":e,s);import"./modulepreload-polyfill-B5Qt9EMX.js";console.log("task-03");console.log("");class c{constructor(e){r(this,"storage");this.storage=e}getItems(){return this.storage}addItem(e){this.storage.push(e)}removeItem(e){this.storage.includes(e)&&this.storage.splice(this.storage.indexOf(e),1)}}const o=new c(["Нанитоиды","Пролонгер","Железные жупи","Антигравитатор"]),a=o.getItems();console.table(a);o.addItem("Дроид");console.table(a);o.removeItem("Пролонгер");console.table(a);
