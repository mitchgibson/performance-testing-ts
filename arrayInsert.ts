import { runTests } from "./testRunner";

function testPush(iterations: number): void {
    const arr: number[] = [];
    for (let i = 0; i < iterations; i++) {
        arr.push(i);
    }
}

function testSpread(iterations: number): void {
    let arr: number[] = [];
    for (let i = 0; i < iterations; i++) {
        arr = [...arr, i];
    }
}

function testConcat(iterations: number): void {
    let arr: number[] = [];
    for (let i = 0; i < iterations; i++) {
        arr = arr.concat(i);
    }
}

const tests = [
    { name: "Push", fn: testPush },
    { name: "Spread", fn: testSpread },
    { name: "Concat", fn: testConcat },
];

runTests(tests, 5000);
