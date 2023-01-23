let employeeLists = [];
let employeeData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    salary: 0,
    address: {
        line1: "",
        line2: "",
        area: "",
        city:"",
        pincode: "",
        state:""
    },
    photo:"",
    enrollmentNumber: ""
};
function addemployeeData(employeeDetail) {
    let addemployeeIndex = employeeLists.findIndex((employee) => {
        return employee.enrollmentNumber === employeeDetail.enrollmentNumber
    });
    if (addemployeeIndex === -1) employeeLists.push(employeeDetail);
    else console.log("This employee is already exists!!!");
}
function updateemployeeData(employeeDetail) {
    let updateemployeeIndex = employeeLists.findIndex((employee) => {
        return employee.enrollmentNumber === employeeDetail.enrollmentNumber
    });
    employeeLists[updateemployeeIndex] = employeeDetail;
}
function deleteemployeeData(enrollmentNumber) {
    let deleteemployeeIndex = employeeLists.findIndex((employee) => {
        return employee.enrollmentNumber === enrollmentNumber
    });
    employeeLists.splice(0, deleteemployeeIndex + 1);
}
addemployeeData({
    firstName: "krishna",
    lastName: "patel",
    email: "k@gmail.com",
    mobile: "9104112512",
    salary: 20000,
    address: {
        line1: "moti faliya",
        line2: "near post office",
        area: "amroli",
        city:"surat",
        pincode: "394107",
        state:"Gujarat"
    },
    enrollmentNumber: "kp1"
})
addemployeeData({
    firstName: "yaashi",
    lastName: "patel",
    email: "y@gmail.com",
    mobile: "9898989898",
    salary: 21000,
    address: {
        line1: "galaxy royal",
        line2: "bunglows",
        area: "jahangirpura",
        city:"surat",
        pincode: "394109",
        state:"Gujarat"
    },
    enrollmentNumber: "yp1"
})
addemployeeData({
    firstName: "yaashi",
    lastName: "patel",
    email: "y@gmail.com",
    mobile: "9898989898",
    salary: 32000,
    address: {
        line1: "galaxy royal",
        line2: "bunglows",
        area: "jahangirpura",
        city:"surat",
        pincode: "394109",
        state:"Gujarat"
    },
    enrollmentNumber: "yp1"
})
console.log("employee Lists After ADD : ", employeeLists,employeeLists.length);

updateemployeeData({
    firstName: "mohini",
    lastName: "patel",
    email: "m@gmail.com",
    mobile: "9104112512",
    salary: 11000,
    address: {
        line1: "moti faliya",
        line2: "near post office",
        area: "amroli",
        city:"surat",
        pincode: "394107",
        state:"Gujarat"
    },
    enrollmentNumber: "kp1"
})
console.log("employee Lists After UPDATE : ", employeeLists,employeeLists.length);

deleteemployeeData("kp1");
console.log("employee Lists After DELETE : ", employeeLists,employeeLists.length);
