

class Bank{
  //اطلاعات حساب بانکی
  constructor(name, mojodi = 0) {
    this.name = name;
    this.mojodi= mojodi;
    this.number = 0;
  }
  //واریز
  variz(num) {
    this.mojodi += num;
    this.number++;
    console.log(`variz: ${num}       -           New mojodi: ${this.mojodi}`);
  }
  
  //برداشت
  bardasht(num) {
    if (num <= this.mojodi) {
      this.mojodi -= num;
      this.numTransactions++;
      console.log(`bardasht: ${num}       -       New mojodi: ${this.mojodi}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
  
  //دفعات مراجعه به بانک
numbergobank() {
    return this.number;
  }
}

//ورود اطلاعات
const person = new Bank("Kobra Kardashian", 5000);
person.variz(9000);
person.bardasht(1000);

console.log(` ${person.numbergobank()}`);



