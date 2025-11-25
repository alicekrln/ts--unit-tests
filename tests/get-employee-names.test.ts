import { expect, test } from "vitest";
import { getEmployeeNames } from "../src/get-employee-names";

test ("getEmployeeNames", () => {
    expect(getEmployeeNames([
        {
            id: 165,
            name: "Alice",
            age: 29,
            role: "CEO",
            isActive: true,
        },
        {
            id: 324,
            name: "Bamse",
            age: 7,
            role: "Customer Service Manager",
            isActive: true,
        },
        {
            id: 282,
            name: "Pippi",
            age: 89,
            role: "Head of Security",
            isActive: true,
        },
        {
            id: 733,
            name: "Mike Wazowski",
            age: 35,
            role: "HR Manager",
            isActive: true,
        },
        {
            id: 672,
            name: "Farbror Melker",
            age: 65,
            role: "Office Manager",
            isActive: true,
        },
    ])).toEqual({
        names: ["Alice", "Bamse", "Pippi", "Mike Wazowski", "Farbror Melker"],
        count: 5,
    });
});