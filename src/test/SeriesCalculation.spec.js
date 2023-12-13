import {serie} from '../components/SeriesCalculation'
import { fibonacci, primo, triangular } from '../components/tools';

//Test unitarios

describe("serie", () => {
    it("Debería retornar 0 cuando n es negativo (-6)", () => {
        expect(serie(-6)).toBe(0n);
    });
    it("Debería retornar 5 cuando n es 1", () => {
        expect(serie(1)).toBe(5n);
    });
    it("Debería retornar 0 cuando n es 5", () => {
        expect(serie(5)).toBe(0n);
    });
    it("Debería retornar -163 cuando n es 9", () => {
        expect(serie(9)).toBe(-163n);
    });
    it("Debería retornar -1502 cuando n es 13", () => {
        expect(serie(13)).toBe(-1502n);
    });
    it("Debería retornar -6708 cuando n es 16", () => {
        expect(serie(16)).toBe(-6708n);
    });
    it("Debería retornar -47050 cuando n es 20", () => {
        expect(serie(20)).toBe(-47050n);
    });
    it("Debería retornar -200186 cuando n es 23", () => {
        expect(serie(23)).toBe(-200186n);
    });
    it("Debería retornar -524686 cuando n es 25", () => {
        expect(serie(25)).toBe(-524686n);
    });
    it("Debería retornar -3598932 cuando n es 29", () => {
        expect(serie(29)).toBe(-3598932n);
    });

});

describe("primo", ()=>{
    it("Debería retornar 11 cuando n es 5", () =>{
        expect(primo(5)).toBe(11n)
    })
    it("Debería retornar 359 cuando n es 72", () =>{
        expect(primo(72)).toBe(359n)
    })
});
describe("triangular", ()=>{
    it("Debería retornar 91 cuando n es 13", () =>{
        expect(triangular(13)).toBe(91n)
    })
    it("Debería retornar 4950 cuando n es 99", () =>{
        expect(triangular(99)).toBe(4950n)
    })
});
describe("fibonacci", ()=>{
    it("Debería retornar 13 cuando n es 7", () =>{
        expect(fibonacci(7)).toBe(13n)
    })
    it("Debería retornar 44945570212853 cuando n es 67", () =>{
        expect(fibonacci(67)).toBe(44945570212853n)
    })
});