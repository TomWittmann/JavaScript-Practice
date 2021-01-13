/**
 * The bind method returns a new funciton that when called has its this
 * keyword set to the provided value.
 * 
 * bind(thisArg: any, ...argArray: any[]): any
 * 
 * An object to which the this keyword can refer inside the new function.
 * 
 * For a given function, creates a bound function that 
 * has the same body as the original function. 
 * The this object of the bound function is associated with the
 * specified object, and has the specified initial parameters.
 */

const person = {
    hi: function() {
        console.log("Hello my name is " + this.name);
    }
}

person.hi();    // Hello my name is undefined.

const person1 = {
    name: "Tom"
}

person.hi.bind(person1);    // Doesn't outprint anything.

person1Hi = person.hi.bind(person1);

person1Hi();    // Hello my name is tom

const student = {
    hi: function(class1, class2, class3) {
        console.log("Hello my name is " + this.name + " and I am taking "
        + class1 + ", " + class2 + ", " + class3);
    }
}

student.hi("Computer Science", "Chemistry", "English"); // Hello my name is undefined and I am taking Computer Science, Chemistry, English

student1 = {
    name: "Tom"
}

student1Hi = student.hi.bind(student1, "English", "Biology", "Botany");

student1Hi();   // Hello my name is Tom and I am taking English, Biology, Botany

// So the main difference is bind allows you to set the this value now while allowing you to execute the function in the future
// because it returns a new function object. Call and apply execute the current function immediately.