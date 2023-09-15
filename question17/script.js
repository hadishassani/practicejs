function date(number) {
  let month;
  if (number <= 186) {
    month = Math.ceil(number / 31);
  } else {
    month = Math.ceil((number - 6) / 30);
  }

  let day;
  if (month <= 6) {
    day = number - (month - 1) * 31;
  } else {
    day = number - (month - 1) * 30 -6;
  }

  return `${month} / ${day}`;
}
console.log(date(216));