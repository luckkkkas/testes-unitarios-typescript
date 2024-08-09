export function wordCount(sentence: string): number {
    if(!sentence){ return 0}
    return sentence.trim().split(/\s+/).length;
}
