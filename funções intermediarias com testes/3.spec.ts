import { intersection } from "./3"

describe('intersection',()=>{
    it('deve achar a intersecção de 2 arrays', ()=> {
        const array1=[1,2,"q",4,'g,'];
        const array2=[9,1,'a',5,0,3,'g,']
        const value = intersection(array1, array2);
        expect(value).toEqual([1,'g,'])
    })

    it('se não houver intersecção de 2 arrays', ()=> {
        const array1=[1,2,"q",4,];
        const array2=[9,'a',5,0,3,'g,']
        const value = intersection(array1, array2);
        expect(value).toEqual([])
    })
})