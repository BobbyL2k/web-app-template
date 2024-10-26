export function assert(expression: boolean, message = 'Assertion Error'): asserts expression {
    if (!expression) {
        // eslint-disable-next-line no-debugger
        debugger;
        throw new Error(message);
    }
}

// export = assert;
export default assert;