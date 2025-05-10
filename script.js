


// function repSet(a){
//     let arr = a
//     for (let i = 0; i<a; i++){
//         arr = [arr]
//         // console.log(arr)
//     }
//     return arr
// }

// console.log(repSet(4))

// function close10(a, b) {
//     if (Math.abs(10-a) < Math.abs(10-b)) return a
//     else return b
// }

// console.log(close10(12, '9'))


// function findBrokenKeys(str1, str2) {
//     let arr = new Set()
//     for (let i = 0; i<str1.length; i++){
//         if (str1[i]!=str2[i]) arr.add(str1[i])
//     }
//     return [...arr]
// }

// console.log(findBrokenKeys('happy birthday', 'hawwy birthday'))



// function replace(str, a, b) {
//     let newStr = ''
//     for (let i of str){
//         if (i==a) newStr+=b
//         else newStr+=i
//     }
//     return newStr
// }

// console.log(replace('Hello world', 'l', 'k'))


// function backAround(str) {
//     str = str.trim()
//     return `${str.at(-1).toUpperCase()}${str.toUpperCase()}${str.at(-1).toUpperCase()}`
// }
// console.log(backAround('   cat   '))


//  function arrSort(arr1, arr2){
//     return [...arr1, ...arr2].sort((a,b) => a>b ? 1: -1)
//  }

// console.log(arrSort([1,2,3,4], [9,7,6,5]))

// function num_of_digits(a) {
//     return a.toString().length
// }

// console.log(num_of_digits(1000))

// function addUp(a){
//     let sum = 0;
//     for (let i = 1; i<=a; i++){
//         sum+=i
//     }
//     return sum
// }

// console.log(addUp(4))

// function matchHouses(a){
//     return a==1 ? 6: a*6-(a-1)
// }

// console.log(matchHouses(87))

// function toArray(obj) {
//     return  Object.entries(obj)
// }

// console.log(toArray({a:1, b:2}))


// function concat(...arr) {
//     return arr.flat()
// }

// console.log(concat([12,21,32], [34,56,1]))


// function removeLeadingTrailing(a){
//     return parseFloat(a)
// }

// console.log(removeLeadingTrailing('230.0001'))
// console.log(removeLeadingTrailing('00402'))

// function commonElements(arr1, arr2) {
//   return [...new Set(arr1)].filter(item => arr2.includes(item));
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); 

