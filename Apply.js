/**
 * apply(thisArg: any, argArray?: any): any
 * The object to be used as the this object.
 * 
 * Calls the function, substituting the specified object 
 * for the this value of the function, and the specified 
 * array for the arguments of the function.
 * 
 */

const person = {
    hi: function() {
        console.log("Hello my name is " + this.name);
    }
}

// If you added name to the above object then it would not be undefined.

person.hi();    // Hello my name is undefined

const person1 = {
    name: "Tom"
}

person.hi.apply(person1);   // Hello my name is Tom

// So what is the difference between apply and call? Apply takes an array as an argument while call takes arguments separately!

const student = {
    hi: function(class1, class2, class3) {
        console.log("Hi my name is " + this.name + " and the classes I am taking are "
        + class1 + ", " + class2 + ", " + class3);
    }
}

const student1 = {
    name: "Tom"
}

student.hi.apply(student1, ["Algebra", "Gym", "History"]);  // Hi my name is Tom and the classes I am taking are Algebra, Gym, History


// Here, this refers to module.exports which will be empty. In node!
module.exports.name = "Spencer";
this.name = "Greg";
person.hi.apply(this);



