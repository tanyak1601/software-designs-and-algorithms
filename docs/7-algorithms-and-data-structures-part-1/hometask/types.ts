export interface IVertex {
  value: string;
}

export interface IEdge {
  from: IVertex;
  to: IVertex;
  weight: number;
}

export interface WeightedGraph {
  addVertex(key: string): void;
  addEdge(vertex1: IVertex, vertex2: IVertex, weight: number): void;
}

