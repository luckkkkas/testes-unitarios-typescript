function paginate<T>(items: T[], pageSize: number, pageNumber: number): T[] {
    return items.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}
