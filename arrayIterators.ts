import { runTests } from "./testRunner";


function testArrayForEach(iterations:number):void {
    const arr:number[] = Array(iterations);

    arr.forEach((value, index) => {
        arr[index] = value;
    });
}

function testArrayFor(iterations:number):void {
    const arr:number[] = Array(iterations);

    for (let i = 0; i < iterations; i++) {
        arr[i] = i;
    }
}

function testArrayMap(iterations:number):void {
    const arr:number[] = Array(iterations);

    arr.map((value, index) => {
        arr[index] = value;
    });
}

function testArrayReduce(iterations:number):void {
    const arr:number[] = Array(iterations);

    arr.reduce((_, value, index) => {
        arr[index] = value;
        return value;
    }, 0);
}

function testArrayForOf(iterations:number):void {
    const arr:number[] = Array(iterations);

    for (const value of arr) {
        arr[value] = value;
    }
}

function testArrayEntries(iterations:number):void {
    const arr:number[] = Array(iterations);

    for (const [index, value] of arr.entries()) {
        arr[index] = value;
    }
}

function testArrayKeys(iterations:number):void {
    const arr:number[] = Array(iterations);

    for (const index of arr.keys()) {
        arr[index] = index;
    }
}

function testArrayValues(iterations:number):void {
    const arr:number[] = Array(iterations);

    for (const value of arr.values()) {
        arr[value] = value;
    }
}

const tests = [
    { name: "Array.forEach", fn: testArrayForEach },
    { name: "Array.for", fn: testArrayFor },
    { name: "Array.map", fn: testArrayMap },
    { name: "Array.reduce", fn: testArrayReduce },
    { name: "Array.forOf", fn: testArrayForOf },
    { name: "Array.entries", fn: testArrayEntries },
    { name: "Array.keys", fn: testArrayKeys },
    { name: "Array.values", fn: testArrayValues },
];

runTests(tests, 10_000);