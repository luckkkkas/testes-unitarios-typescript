import { groupBy } from "./7"

describe('groupBy',()=>{
    it('retorna um array',()=>{
        const array = [1,2,4,5,6]
        const func = ()=>{}
        const value = groupBy(array, num =>num % 2 === 0 ? 'par':'impar');
        expect(value).toEqual(new Map([
            ['impar', [1,3,5]],
            ['par', [2,4,6]]
        ]));
    })
})