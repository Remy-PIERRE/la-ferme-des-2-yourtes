export class AllData {
  constructor() {}

  addCategory(name, data) {
    this[name] = data;
  }

  getCategory(name) {
    if (this[name]) {
      const data = JSON.parse(JSON.stringify(this[name]));
      return data;
    }
  }
}
