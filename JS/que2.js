let userEnterPassword = "Krishil910#4";
if (userEnterPassword.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{6,14}$/)) {
    console.log("User enter password is correct!");
} else {
    if (userEnterPassword.length < 6 || userEnterPassword.length > 14) console.log("Password must be min 6 and max 14 char");
    else if (userEnterPassword.split("")[0] !== userEnterPassword.split("")[0].toUpperCase()) console.log("Password first char must be uppercase");
    else if (!userEnterPassword.match(/^(.*[a-z].*)$/)) console.log("Password must contain at least one lowercase");    
    else if (!userEnterPassword.match(/^(.*\d.*)$/)) console.log("Password must contain at least one digit");
    else console.log("User enter password is Incorrect!");
}