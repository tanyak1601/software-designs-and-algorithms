import { vertices, edges } from './VertecesAndEdges';
import { WeightedGraph, IVertex, IEdge } from './types';

class Graph implements WeightedGraph {
  private adjacentList: Map<string, object>;

  constructor() {
    this.adjacentList = new Map();
  }

  addVertex(key: string): void {
    this.adjacentList.set(key, {});
  }

  addEdge(from: IVertex, to: IVertex, weight: number): void {
    const graphItem = this.adjacentList.get(from.value);
    if (graphItem) {
      graphItem[to.value] = weight;
    }
  }
}

const graph: Graph = new Graph();

vertices.forEach(verticle => graph.addVertex(verticle.value));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

console.log();
