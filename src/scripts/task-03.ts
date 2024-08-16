console.log('task-03');
console.log('');

interface IStorage {
  storage: string[];
  getItems(): string[];
  addItem(item: string): void;
  removeItem(item: string): void;
}

class Storage implements IStorage {
  storage: string[];

  constructor(storage: string[]) {
    this.storage = storage;
  }

  getItems(): string[] {
    return this.storage;
  }

  addItem(item: string): void {
    this.storage.push(item);
  }

  removeItem(item: string): void {
    if (this.storage.includes(item)) {
      this.storage.splice(this.storage.indexOf(item), 1);
    }
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

export {};
