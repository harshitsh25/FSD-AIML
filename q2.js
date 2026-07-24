// create a student object and create the copy of the object and assign a new property address .

const Baccha = {
    name : "Harshit",
    rollno : 84,
    branch : "CSE(AIML)"
}

const newBaccha = {...Baccha,
    address : {
        state : "Uttar Pradesh",
        city : "Ghaziabad",
        locality : "Shastri Nagar",
        pincode : 2010002
    }
}
console.log("Baccha = ", Baccha);
console.log("newBaccha = ",newBaccha); 

