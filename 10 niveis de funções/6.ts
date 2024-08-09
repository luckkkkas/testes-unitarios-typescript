function shallowEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }

    return true;
}