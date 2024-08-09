interface Edge {
    node: string;
    weight: number;
}

function dijkstra(graph: Map<string, Edge[]>, start: string, end: string): number | null {
    const distances: Map<string, number> = new Map();
    const visited: Set<string> = new Set();

    distances.set(start, 0);

    while (visited.size < graph.size) {
        const [currentNode] = [...distances.entries()]
            .filter(([node]) => !visited.has(node))
            .reduce((min, [node, dist]) => dist < min[1] ? [node, dist] : min, ['', Infinity]);

        if (!currentNode || currentNode === end) break;

        visited.add(currentNode);

        const neighbors = graph.get(currentNode) || [];
        for (const { node, weight } of neighbors) {
            const newDist = (distances.get(currentNode) || Infinity) + weight;
            if (newDist < (distances.get(node) || Infinity)) {
                distances.set(node, newDist);
            }
        }
    }

    return distances.get(end) || null;
}
