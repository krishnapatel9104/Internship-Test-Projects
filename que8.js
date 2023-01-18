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
