export function mostFrequent<T>(arr: T[]): T | null {
    if (arr.length === 0) return null;

    const frequencyMap = new Map<T, number>();
    let maxFreq = 0;
    let mostFreqElement: T | null = null;

    for (const element of arr) {
        const freq = (frequencyMap.get(element) || 0) + 1;
        frequencyMap.set(element, freq);

        if (freq > maxFreq) {
            maxFreq = freq;
            mostFreqElement = element;
        }
    }

    return mostFreqElement;
}
