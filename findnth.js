function checkN(n) {
  const nSum = n
    .toString()
    .split('')
    .reduce((a, e) => parseInt(a, 10) + parseInt(e, 10), 0);
  return nSum === 9;
}
function findNth(n) {
  let result = 0;
  for (let nth = 0; nth !== n;) {result += 9; checkN(result) && ++nth;}
  return result;
}
const start = Date.now();
console.log(findNth(2017));
console.log(Date.now() - start + ' ms');
