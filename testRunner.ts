
type Test = {
    name: string;
    fn: (iterations:number) => void;
}

export function runTests(tests: Test[], iterations = 10000): void {
    console.log("Starting performance testing: Spread");
    console.log("==================================");

    tests.forEach(test => {
        console.log("\n\n");
        console.log(`${test.name}: Testing ${iterations} iterations`);
        console.log("-----------------------");
        console.time(test.name);
        test.fn(iterations);
        console.timeEnd(test.name);
        console.log("-----------------------");
    });
}