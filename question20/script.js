function numbers() {
    let number = [];
  
    for (let i = 1000; i <= 9999; i++) {
      let one = i % 10;
      let ten = Math.floor((i % 100) / 10);
      let hundred= Math.floor((i % 1000) / 100);
      let thousand = Math.floor(i / 1000);
  
      if (one % 2 === 0 && hundred % 2 === 0 && ten% 2 !== 0 && thousand% 2 !== 0) {
        number.push(i);
      }
    }
   console.log(number);
}
numbers();
  




