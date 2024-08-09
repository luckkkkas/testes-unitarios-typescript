function jaccardSimilarity<T>(set1: Set<T>, set2: Set<T>): number {
    const intersectionSize = new Set([...set1].filter(x => set2.has(x))).size;
    const unionSize = new Set([...set1, ...set2]).size;
    return intersectionSize / unionSize;
}
