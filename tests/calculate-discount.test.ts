import { expect, suite, test } from "vitest";
import { calculateDiscount } from "../src/calculate-discount";

suite ("calculateDiscount", () => {
    test("Returns proper value after membership discount and use of coupon code", () => {
        expect(calculateDiscount(1000, "silver", 150)).toBe(800)
    })
    
    test("Returns proper value after membership discount only", () => {
        expect(calculateDiscount(1000, "gold", 0)).toBe(900)
    });

    test("Returns proper value when coupon code exceeds total amount", () => {
        expect(calculateDiscount(200, "standard", 250)).toBe(0)
    });
});