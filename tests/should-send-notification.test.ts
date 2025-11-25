import { expect, suite, test } from "vitest";
import { shouldSendNotification } from "../src/should-send-notification";

suite ("shouldSendNotification", () => {
    test("Returns proper value when muted", () => {
        expect(shouldSendNotification("all", {
            isMentioned: false, 
            isCritical: false, 
            isMuted: true
        })).toBe(false)
    });
    test("Returns proper value when mentioned", () => {
        expect(shouldSendNotification("mentions", {
            isMentioned: true, 
            isCritical: false, 
            isMuted: false
        })).toBe(true)
    });
    test("Returns proper value when critical", () => {
        expect(shouldSendNotification("mentions", {
            isMentioned: false, 
            isCritical: true, 
            isMuted: false
        })).toBe(true)
    });
});