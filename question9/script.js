function number() {
  for (let i = 10; i <= 99; i++) {
    const ten = Math.floor(i / 10);
    const one = i % 10;
    const newnum = (one* 10) + ten;
    
    if (i === newnum) {
      console.log(i);
    }
  }
}number();



