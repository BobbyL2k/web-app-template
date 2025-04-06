import { add } from "@/lib/add";
import assert from "@/lib/assert"; // from common/lib
import { sub } from "@/sub"; // from common/src
import type { Assert } from "ts-runtime-checks";

console.log("1 + 2 =", add(1, 2));
assert(sub(1, 2) === -1);

interface User {
    name: string;
    id: number;
}

function validate(user: Assert<User>) {
    console.log(user);
    // Your code...
}

validate({ name: "abc", id: 4 });
