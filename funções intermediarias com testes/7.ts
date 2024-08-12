export function groupBy<T, K>(arr: T[], keyFunc: (item: T) => K): Map<K, T[]> {
    return arr.reduce((acc, item) => {
        const key = keyFunc(item);
        const group = acc.get(key) || [];
        group.push(item);
        acc.set(key, group);
        return acc;
    }, new Map<K, T[]>());
}
