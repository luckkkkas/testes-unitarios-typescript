import { formatCurrency } from "./3"

describe('formato de moeda', () => {
    it('deve retornar em formato da moeda',() => {
       const value = formatCurrency(1300, 'en-US','USD')

       console.log(value)
       expect(value).toEqual("$1,300.00")
    })

    it('deve retornar em dolar se passado apena o numero',() => {
        const value = formatCurrency(1300)
 
        console.log(value)
        expect(value).toEqual("$1,300.00")
    })

    it('deve retornar em Real',() => {
        const value = formatCurrency(1300, 'pt-BR', 'BRL')
 
        console.log(value)
        expect(value).toBe("R$ 1.300,00")
    })
})