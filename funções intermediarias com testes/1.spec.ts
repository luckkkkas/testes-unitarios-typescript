import { isPrime } from "./1"

describe('isPrime',() => {
    it('retorna true se for primo',() =>{
        const value = isPrime(29)
        expect(value).toBeTruthy()
    })

    it('retorna false se não for primo',()=>{
        const value = isPrime(20)
        expect(value).toBeFalsy()
    })
})