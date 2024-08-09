import { isPalindrome } from "./6";

describe('isPalindrome',() =>{
    it('deve retornar true',()=>{
        const string = 'ana';
        const value = isPalindrome(string);
        expect(value).toBe(true);
    })

    it('deve retornar false',()=>{
        const string = 'banana';
        const value = isPalindrome(string);
        expect(value).toBeFalsy();
    })

    it('deve retornar false',()=>{
        const string = '';
        const value = isPalindrome(string);
        expect(value).toBeTruthy();
    })
})