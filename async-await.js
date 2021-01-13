/**
 * The await operator is used to wait for a Promise.
 * It can only be used inside an async function.
 * 
 * The syntax is:
 * 
 * [rv] = await expression;
 * 
 * expression - a Promise or any value to wait for.
 * 
 * rv - the fulfilled value of the promise, or the value itself if it's not a promise.
 * 
 * The await expression causes the async function execution to pause until 
 * a Promise is settled (fulfilled or rejected) and to resume execution of the async function
 * after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
 * 
 * If the Promise is rejected, the await expression throws the rejected value.
 * 
 * 
 */

const fetch = require('node-fetch');

async function myFunction() {
    try {
        const data = await fetch('https://api.github.com/users/tomwittmann');
        const json = await data.json();
        console.log(json);
    } catch(err) {
        console.log("WOOPS!");
    }
}

myFunction();

console.log("Did we get the data yet?");


