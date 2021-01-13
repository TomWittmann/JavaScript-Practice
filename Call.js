/**
 * call(thisArg: any, ...argArray: any[]): any
 * The object to be used as the current object.
 * Calls a method of an object, substituting 
 * another object for the current object
 */

// You can see how this person object has no name.
// The this keyword refers to person here.
const person = {
    hi: function() {
        console.log("Hi my name is " + this.name);
    }
}

person.hi();    // Hi my name is undefined.

const person1 = {
    name: "Tom"
}

// Now the this keyword refers to person1.
person.hi.call(person1);    // Hi my name is Tom.

// This assignment is of course not permananet so this again refers to person now.
person.hi();    // Hi my name is undefined.

const person2 = {
    name: "Greg"
}

person.hi.call(person2)

// The call method can also use arguments. These arguments will be passed to the function.

const student = {
    hi: function(class1, class2, class3) {
        console.log("Hi my name is " + this.name + " and I am enrolled in "
        + class1 + ", " + class2 + ", " + class3);
    }
}

// Hi my name is undefined and I am enrolled in Algebra, Geometry, Chemistry
student.hi("Algebra", "Geometry", "Chemistry");

const student1 = {
    name: "Tom"
}

// Hi my name is Tom and I am enrolled in Chemistry, Biology, Computer Science
student.hi.call(student1, "Chemistry", "Biology", "Computer Science");