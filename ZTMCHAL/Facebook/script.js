var database = [
    {
        userName : "Andrei",
        password : "supersecret"
    },
    {
        userName : "Am0hii",
        password : "appleIphone5s"
    },
    {
        userName:"test",
        password:"ts"
    }
    ];
    
    // database.userName[0] ❌
    // database[0].userName ✅
var newsFeed = [
    {
        userName : "Mohammad",
        timeline : "Hey! Finally I Trust the process and not complaning"
    },
    {
        userName : "Ali",
        timeline : "No Girl"
    },
    {
        userName:"Reza",
        timeline: "SEO Learning"
    }
]    

// function signIn_Checker (username,password) {
//     if( user_input_userName === database[i].userName  && user_input_password === database[i].password ) {
//         console.log("Welcome")
//     }
//     else if(user_input_userName !== database.userName  && user_input_password !== database.userName) {
//         console.log("Hmm sounds Like you have Wrong UserName or Password")
//     }
//     else(
//         console.log("What")
//     )
// }

// Step 1️⃣ Build the function

function signIn_Checker(username,password) {
    for (var i=0; i < database.length; i++ ) {
            if (username === database[i].userName && password === database[i].password) {
                return "Hi"
            }
            else{
                return "bye"
            }
        }
}

// Step 2️⃣ Get the function input 


user_input_userName = prompt("Please Enter Your User Name : ")
user_input_password = prompt("Please Enter Your Password : ")

// database.forEach(signIn_Checker);

// Step3️⃣ run the function

// console.log(signIn_Checker(user_input_userName,user_input_password))

function newsFeed (user_input_userName,user_input_password){
if (signIn_Checker === true){
    console.log(newsFeed)
}
else{
    alert("sorry i don't know you")
}
}