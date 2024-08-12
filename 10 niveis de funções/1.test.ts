import { isValidEmail } from "./1";

describe('isValidEmail', () => {
    it('deve retornar true caso email valido', () => {
        const email = 'lucashbo321@email.com';
        const value = isValidEmail(email)
        expect(value).toBeTruthy()
    })

    it('deve retornar false caso email inválido', () => {
        const email = 'lucashbo321@.com';
        const value = isValidEmail(email)
        expect(value).toBeFalsy()
    })

    it('deve retornar false caso email inválido', () => {
        const email = 'lucas hbo321@email.com';
        const value = isValidEmail(email)
        expect(value).toBeFalsy()
    })

    it('deve retornar false caso email inválido', () => {
        const email = '@email.com';
        const value = isValidEmail(email)
        expect(value).toBeFalsy()
    })
})