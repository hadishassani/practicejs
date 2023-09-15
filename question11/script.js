
function finddivisors(n) {
  const divisors = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 4 === 0) {
      divisors.push(i);
      sum += i;
    }
  }
  console.log(divisors);
  console.log(divisors.length);
  console.log( sum);
}
console.log(finddivisors(40));

