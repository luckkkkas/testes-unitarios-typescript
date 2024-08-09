import { sumOfDigits } from "./2"

describe('sumOfDigits',()=>{
    it('deve retornar a soma de numeros de um valor',()=>{
        const value = sumOfDigits(1004);
        expect(value).toBe(5);
    })

    it('se o valor for nulo',()=>{
        const value = sumOfDigits(0);
        expect(value).toBe(0)
    })
})