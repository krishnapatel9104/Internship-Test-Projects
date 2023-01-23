// que 1
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

// que 2
let userEnterPassword = "P#rishi@l91042";
if (userEnterPassword.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{6,14}$/)) {
    console.log("User enter password is correct!");
}else console.log("User enter password is Incorrect!");

// que 3
function calc(operands, operator) {
    let finalCalc = 0;
    if (operator === '+') finalCalc = operands.value1 + operands.value2;
    if (operator === '-') finalCalc = operands.value1 - operands.value2;
    if (operator === '*') finalCalc = operands.value1 * operands.value2;
    if (operator === '/') {
        if (operands.value2 === 0) return 0;
        finalCalc = operands.value1 / operands.value2;
    }
    if (operator === '%') finalCalc = operands.value1 % operands.value2;
    return finalCalc;
}
console.log("SUM : ", calc({ value1: 5, value2: 3 }, '+'));
console.log("SUBTRACT : ",calc({value1:5,value2:3},'-'));
console.log("MULTIPLY : ",calc({value1:5,value2:3},'*'));
console.log("DIVISION : ",calc({value1:2,value2:0},'/'));
console.log("MODULE : ",calc({value1:3,value2:3},'%'));

// que 4
let alphbetStr = "ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ";
let str = new Set(alphbetStr);
let arrStr = Array.from(str);
console.log("Final output : ", arrStr.sort());
console.log("Final output other way we can do : ", [...str].sort());

// que 5
function getType(value) {
    return typeof (value);
}
console.log(getType(1));
console.log(getType("kp"));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(true));
console.log(getType(BigInt(999999999999999999)));

// que 6
let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let searchWord = "Ipsum";

console.log("searchWord is in para or not? ", para.includes(searchWord));
console.log("searchWord position in para : ", para.search(searchWord));
console.log("searchWord length : ", searchWord.length);
console.log("last 3 char of searchWord : ", searchWord.slice(-3));

// que 7
let input = "Massachusetts";
console.log("Output string : ",input.substring(3,11));

// que 8,9
let studentLists = [];
let studentData = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    mobile: "",
    birthdate: "",
    address: {
        line1: "",
        line2: "",
        area: "",
        city:"",
        pincode: ""
    },
    enrollmentNumber: ""
};
function addStudentData(studentDetail) {
    let addStudentIndex = studentLists.findIndex((student) => {
        return student.enrollmentNumber === studentDetail.enrollmentNumber
    });
    if (addStudentIndex === -1) studentLists.push(studentDetail);
    else console.log("This student is already exists!!!");
}
function updateStudentData(studentDetail) {
    let updateStudentIndex = studentLists.findIndex((student) => {
        return student.enrollmentNumber === studentDetail.enrollmentNumber
    });
    studentLists[updateStudentIndex] = studentDetail;
}
function deleteStudentData(enrollmentNumber) {
    let deleteStudentIndex = studentLists.findIndex((student) => {
        return student.enrollmentNumber === enrollmentNumber
    });
    studentLists.splice(0, deleteStudentIndex + 1);
}
addStudentData({
    firstName: "krishna",
    lastName: "patel",
    middleName: "rajeshbhai",
    email: "k@gmail.com",
    mobile: "9104112512",
    birthdate: "20/04/1999",
    address: {
        line1: "moti faliya",
        line2: "near post office",
        area: "amroli",
        city:"surat",
        pincode: "394107"
    },
    enrollmentNumber: "kp1"
})
addStudentData({
    firstName: "yaashi",
    lastName: "patel",
    middleName: "ankitbhai",
    email: "y@gmail.com",
    mobile: "9898989898",
    birthdate: "24/05/1999",
    address: {
        line1: "galaxy royal",
        line2: "bunglows",
        area: "jahangirpura",
        city:"surat",
        pincode: "394109"
    },
    enrollmentNumber: "yp1"
})
addStudentData({
    firstName: "yaashi",
    lastName: "patel",
    middleName: "ankitbhai",
    email: "y@gmail.com",
    mobile: "9898989898",
    birthdate: "24/05/1999",
    address: {
        line1: "galaxy royal",
        line2: "bunglows",
        area: "jahangirpura",
        city:"surat",
        pincode: "394109"
    },
    enrollmentNumber: "yp1"
})
console.log("Student Lists After ADD : ", studentLists,studentLists.length);

updateStudentData({
    firstName: "mohini",
    lastName: "patel",
    middleName: "ankitbhai",
    email: "m@gmail.com",
    mobile: "9104112512",
    birthdate: "20/04/1999",
    address: {
        line1: "moti faliya",
        line2: "near post office",
        area: "amroli",
        city:"surat",
        pincode: "394107"
    },
    enrollmentNumber: "kp1"
})
console.log("Student Lists After UPDATE : ", studentLists,studentLists.length);

deleteStudentData("kp1");
console.log("Student Lists After DELETE : ", studentLists,studentLists.length);

// que 10
const Hamilton = {
    writesLikeHesRunningOutOfTime: true,
    frenemy: "Aaron Burr",
    greeting() {
        console.log(`Pardon me, are you ${this.frenemy},sir?`)
    }
}
setTimeout(() => {
    Hamilton.greeting()
}, 1000);