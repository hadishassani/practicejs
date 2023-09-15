function bakhshpaziri(number) {
    let sum = 0;
    let num = number;
    while (num > 0) {
        sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (number % sum === 0) {
      console.log("true"); 
    } else {
      console.log("false"); 
    }}

console.log(bakhshpaziri(120));
  
