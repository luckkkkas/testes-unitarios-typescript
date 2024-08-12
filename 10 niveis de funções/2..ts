export function daysBetween(date1: Date, date2: Date): number {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.abs((date2.getTime() - date1.getTime()) / msPerDay);
}
