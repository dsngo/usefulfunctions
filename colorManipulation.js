// function invertColorExplain(color) {
//   const bitwiseVal = 0xFFFFFF ^ parseInt(color.substring(1),16);
//   const convert = `000000${bitwiseVal.toString(16)}`
//   const colorString = convert.slice(-6);
//   return `#${colorString}`
// }
// const color = `#00acbd`
// console.log(invertColor(color)); // #ff5342

function invertColor(color) {
  const bitwiseVal = 0xffffff ^ parseInt(color.substring(1), 16);
  return `#${`000000${bitwiseVal.toString(16)}`.slice(-6)}`;
}
