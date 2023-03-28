import sumarcads from "./sumarCad";

describe("Sumar", () => {
    it("Debería retornar el resultado de 0", () => {
    expect(sumarcads("")).toEqual(0);
    });
    it("Debería retornar el resultado de 1", () => {
    expect(sumarcads("1")).toEqual(1);
    });
    it("Debería retornar el resultado de 1,2", () => {
    expect(sumarcads("1,2")).toEqual(3);
    });
    it("Debería retornar el resultado de varios valores", () => {
    expect(sumarcads("1,2,3,4,5")).toEqual(15);
    });
    it("Debería retornar el resultado de 2 números separados por un guión", () => {
    expect(sumarcads("1-2")).toEqual(3);
    });
    it("Debería retornar el resultado de más de 2 números separados por un guión", () => {
    expect(sumarcads("1-2-3-4-5")).toEqual(15);
    });
    it("Debería retornar el resultado de más de 2 números separados por un guión o una coma", () => {
    expect(sumarcads("1,2,3-4-5")).toEqual(15);
    });
    xit("Debería retornar el resultado de más de 2 números separados por un guión o una coma o un delimitador personalizado", () => {
    expect(sumarcads("//[;] 6,3-2;1")).toEqual(12);
    });
});