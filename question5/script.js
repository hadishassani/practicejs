
function mohasebe(daramadsaliane) {
    if ( daramadsaliane< 50000) {
      console.log("شما از پرداخت  مالیات  معاف هستید."); 
    } else if (daramadsaliane >= 50000 && daramadsaliane < 100000) {
      const mazad = (daramadsaliane - 50000) * 10 / 100;
      console.log(mazad);
    } else {
      const mazad = (daramadsaliane - 100000) * 15 / 100 + 5000;
      console.log(mazad);
    }
}
  
const daramadsaliane= 70000;
mohasebe(daramadsaliane);
  
  
