import { wordCount } from "./4";

describe('wordCount', ()=>{
    it('conta a quantidade de palavras',()=>{
        const sentence = 'hoje é um otimo dia para programar';
        const value = wordCount(sentence);
        expect(value).toBe(7);
    })

    it('retorna 1 se for espaço em branco',()=>{
        const sentence= "   ";
        const value = wordCount(sentence)
        expect(value).toBe(1);
    })
})