export function assert(
	expression: boolean,
	message = "Assertion Error",
): asserts expression {
	if (!expression) {
		// biome-ignore lint/suspicious/noDebugger: assertion should trigger debugger
		debugger;
		throw new Error(message);
	}
}

// export = assert;
export default assert;
