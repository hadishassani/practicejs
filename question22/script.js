for(let i = 100; i <= 999; i++) {
    let one= i % 10;
    let ten = Math.floor((i / 10) % 10);
    let hundred = Math.floor(i / 100);
    if(one === hundred&& ten% 2 === 0) {
        console.log(i);
    }
}