export function intersection<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.filter(element => arr2.includes(element));
}
