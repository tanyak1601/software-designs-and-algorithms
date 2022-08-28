export interface IVertex {
  value: string;
}

export interface IEdge {
  from: IVertex;
  to: IVertex;
  weight: number;
}

export interface WeightedGraph {
  adjacentList: object;
  addVertex(key: string): void;
  addEdge(vertex1: IVertex, vertex2: IVertex, weight: number): void;
}

export interface Path {
  path: string[];
  distance: number;
}

export interface IDijkstra {
  findShortestPath(vertex1: IVertex, vertex2: IVertex): Path;
  findAllShortestPaths(vertex: IVertex): Record<string, Path>;
}
