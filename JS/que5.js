function getType(value) {
    return typeof (value);
}
console.log(getType(1));
console.log(getType("kp"));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(true));
console.log(getType(BigInt(999999999999999999)));