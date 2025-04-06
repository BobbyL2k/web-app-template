import { add } from "@/lib/add";
import assert from "@/lib/assert"; // from common/lib
import { sub } from "@/sub"; // from common/src

console.log("1 + 2 =", add(1, 2));
assert(sub(1, 2) === -1);
