import { runTests } from "./testRunner";

let obj = {
    value: -1
};

function testDirectMutation(iterations:number):void {
    for (let i = 0; i < iterations; i++) {
        obj.value = i;
    }
}

function testObjectAssign(iterations:number):void {
    for (let i = 0; i < iterations; i++) {
        Object.assign(obj, { value: i });
    }
}

function testSpread(iterations:number):void {
    for (let i = 0; i < iterations; i++) {
        obj = { ...obj, value: i };
    }
}

const tests = [
    { name: "Direct Mutation", fn: testDirectMutation },
    { name: "Object.assign", fn: testObjectAssign },
    { name: "Spread", fn: testSpread },
];

runTests(tests, 10_000_000);