import { expect, suite, test } from "vitest";
import { verifyPermission } from "../src/verify-permission";

suite ("verifyPermission", () => {
    test("Returns proper value for underage users", () => {
        expect(verifyPermission(17, "user")).toBe(false)
    });
    test("Returns proper value for guests", () => {
        expect(verifyPermission(25, "guest")).toBe(false)
    });
    test("Returns proper value for users over age limit", () => {
        expect(verifyPermission(18, "user")).toBe(true)
    });
    test("Returns proper value for underage admins", () => {
        expect(verifyPermission(17, "admin")).toBe(true)
    });
    test("Returns proper value for admins with undefined age", () => {
        expect(verifyPermission(undefined, "admin")).toBe(false)
    });
});