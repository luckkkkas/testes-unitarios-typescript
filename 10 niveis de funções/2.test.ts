import { daysBetween } from "./2.";

describe('diasEntre', () => {
    it('deve retornar os dias entre as datars',() => {
        const date1 = new Date('2001-07-14')
        const date2 = new Date('2024-08-12')
        const res = daysBetween(date1, date2);
        expect(res).toEqual(8430);
    })

    it('deve retornar 0 para datas iguais',() => {
        const date1 = new Date('2024-08-12')
        const date2 = new Date('2024-08-12')
        const res = daysBetween(date1, date2);
        expect(res).toEqual(0);
    })
    it('deve retornar o valor da diferença independente da ordem das datas',() => {
        const date1 = new Date('2024-08-12')
        const date2 = new Date('2001-07-14')
        const res = daysBetween(date1, date2);
        expect(res).toEqual(8430);
    })
})