let userInput: unknown
let userName: string

userInput = 5
userInput = 'Max'
if (typeof userInput === 'string') {
  userName = userInput
}

//never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
  // while (true) {}
}
//never
const y = function generateError1(message: string, code: number) {
  throw { message: message, errorCode: code }
  // while (true) {}
}

function generateError2(message: string, code: number) {
  throw { message: message, errorCode: code }
  // while (true) {}
}

generateError('An error occurred!', 500)

// There are two types of "type" provided by typescript

// unknown
// for unknown we need an extra type check with unknown to be able to assign a unknown value
// to a value to a fixed type
// unknown is a better choice than any
