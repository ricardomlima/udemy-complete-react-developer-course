console.log('utils.js runnning');

// exports - default export - named exports

const square = (x) => x * x;
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
// named export
export { square, add };

// export default (a,b) => a - b;
export default subtract;