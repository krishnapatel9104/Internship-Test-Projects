const usernameList = ["krishna", "kp", "patel", "yaashi", "ankit", "ankur", "mohini", "kunjan", "vimal", "purab", "dev", "darsil", "jay", "patu", "sid"];
let username = "mohini";
console.log("username is exits or not? : ", usernameList.includes(username));

for (i = 0; i < usernameList.length; i++){
    if (usernameList[i] === username) {
        console.log("Found username position : ", i, usernameList.indexOf(username));
        break;
    } else {
        console.log("Username : ",usernameList[i]);
    }
}