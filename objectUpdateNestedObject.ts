import { runTests } from "./testRunner";

let obj = {
    value: -1,
    nested: {
        value2: -1,
        value3: -1,
        value4: -1,
        value5: -1,
        value6: -1,
        value7: -1,
        value8: -1,
        value9: -1,
        value10: -1,
        value11: -1,
        value12: -1,
        value13: -1,
        value14: -1,
        value15: -1,
        value16: -1,
        value17: -1,
        value18: -1,
        value19: -1,
        value20: -1,
    },
};

function testDirectMutation(iterations: number): void {
    for (let i = 0; i < iterations; i++) {
        obj.value = i;
    }
}

function testObjectAssign(iterations: number): void {
    for (let i = 0; i < iterations; i++) {
        Object.assign(obj, { value: i });
    }
}

function testSpread(iterations: number): void {
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
