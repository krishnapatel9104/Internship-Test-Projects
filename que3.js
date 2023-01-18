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
