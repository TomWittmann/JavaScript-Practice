/**
 * Currying is transforming a function with multiple arguments into a sequence of nested functions.
 * It returns a new function that expects the next argument inline.
 * 
 * In other words instead of taking all arguments at one time, take the first one and return a new function
 * that takes the second one and returna new function which takes the third etc.
 * 
 * Thus, add(1, 2, 3) => add(1)(2)(3)
 * 
 * The number of arguments a functoin takes is called its arity. So add(a, b) is a 2-arity function.
 * 
 * Curried functions are constructed by chaining closures by defining and immediately returning their inner 
 * functions simultaneously.
 * 
 */

// Not curried
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

add(1, 2, 3);

// Curried
function curryAdd(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

// curryAdd(num1: any): (num2: any) => (num3: any) => any

curryAdd(1)(2)(3);



