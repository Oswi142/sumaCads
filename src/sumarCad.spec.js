import sumarCadenas from "./suma_cadenas";

describe("Sumar", () => {
    it("Debería retornar el resultado de 0", () => {
    expect(sumarCadenas("")).toEqual(0);
    });
    it("Debería retornar el resultado de 1", () => {
    expect(sumarCadenas("1")).toEqual(1);
    });
    it("Debería retornar el resultado de 1,2", () => {
    expect(sumarCadenas("1,2")).toEqual(3);
    });
    it("Debería retornar el resultado de varios valores", () => {
    expect(sumarCadenas("1,2,3,4,5")).toEqual(15);
    });
    it("Debería retornar el resultado de 2 números separados por un guión", () => {
    expect(sumarCadenas("1-2")).toEqual(3);
    });
    it("Debería retornar el resultado de más de 2 números separados por un guión", () => {
    expect(sumarCadenas("1-2-3-4-5")).toEqual(15);
    });
    it("Debería retornar el resultado de más de 2 números separados por un guión o una coma", () => {
    expect(sumarCadenas("1,2,3-4-5")).toEqual(15);
    });
    xit("Debería retornar el resultado de más de 2 números separados por un guión o una coma o un delimitador personalizado", () => {
    expect(sumarCadenas("//[;] 6,3-2;1")).toEqual(12);
    });
});