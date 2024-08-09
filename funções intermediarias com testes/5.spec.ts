import { mostFrequent } from "./5"

describe('mostFrequent',() =>{
    it('retorna null para um array nulo',()=>{
        const array:number[] =[]
        const value = mostFrequent(array)
        expect(value).toEqual(null)
    })

    it('deve retornar o valor mais frequente de uma array',()=>{
        const array = [1,1,1,1,1,2,2,2,2,3,9,0,0,9,];
        const value = mostFrequent(array);
        expect(value).toEqual(1);
    })
})