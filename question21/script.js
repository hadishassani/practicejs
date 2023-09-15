
function oddnumber() {
    let z=[];
    for (let i = 10; i <= 99; i++) {
    
      let one = i % 10;
      let ten = Math.floor(i / 10);
      if (one % 2 !== 0 && ten % 2 !== 0) {
        z.push(i);
        
      }
    }
    console.log(z);
}
  
oddnumber();