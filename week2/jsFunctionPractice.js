// function tripleFive () {
//   for (var i = 0; i < 3; i++) {
//     console.log('Five')
//   }
// }
// tripleFive()

// function lastLetter (string) {
//
//   console.log (string.slice(-1));
//   return string.slice(-1) //return is important when you want to store the value
// }
// lastLetter('hello')

// function square (num) {
//   return num * num;
//   // return Math.pow(num, 2)
// }
// ('2')

// function negate (num) {
//   return -num;
// }
// negate(8)
//
// function toArray (x, y, z) {
//   var thisArray = [x, y, z];
//   return thisArray
// }
// toArray (1, 2, 3)
//
// function startsWithA ( word ) {
// //   if (word.indexOf('a') === 0 || word.indexOf('A') === 0)
// // } return ('true')
// return word.charAt(0).toLowerCase() === 'a'  //shortest answer
// // function ('armadillo')
// }
// startsWithA('armadillo')

function getSeconds (time) {
  var timeSplitter = time.split(':')
  return Number(timeSplitter[0])*60 + Number(timeMaster[1])
}
