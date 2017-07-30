const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function groupSplit(arr, space) {
  return arr.reduce(
    (a, e, i) => (!(i % space) ? a.push([e]) : a[a.length - 1].push(e)) && a,
    []
  );
}
const a = groupSplit(arr,3)
console.log(a)
