import { add } from "@/lib/add";
import { sub } from "@/sub"; // from common/src
import { test } from "uvu";
import * as assert from "uvu/assert";

test("lib", () => {
    assert.is(add(1, 2), 3);
});

test("common/src", () => {
    assert.is(sub(1, 2), -1);
});

test.run();
