const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((string) => {

  let splitArray = string.split(' ')
  const capitalizedArray = splitArray.map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1))
  })
  return capitalizedArray.join(' ')
})
}

// console.log(titleCased(tutorials))
// function splitTutorials(array){
//   for(const element of array)
//   return element.split(' ')
// }
// function titleCased() {
//   for(const element of array)
//   return element.split(' ')
//   return tutorials.map(element => {
//     return (element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
//   })
  
// }

 