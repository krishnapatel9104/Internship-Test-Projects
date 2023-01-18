let alphbetStr = "ABCKWQDEPFGMHODIJKALYMNCQOPQRBSTLBUVLWXYZ";
let str = new Set(alphbetStr);
let arrStr = Array.from(str);
console.log("Final output : ", arrStr.sort());
console.log("Final output other way we can do : ", [...str].sort());