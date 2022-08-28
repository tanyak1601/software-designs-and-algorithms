import { vertices, edges } from './VertecesAndEdges';
import { WeightedGraph, IVertex } from './types';

class Graph implements WeightedGraph {
  adjacentList: object;

  constructor() {
    this.adjacentList = {};
  }

  addVertex(key: string): void {
    this.adjacentList[key] = {};
  }

  addEdge(from: IVertex, to: IVertex, weight: number): void {
    this.adjacentList[from.value][to.value] = weight;
    this.adjacentList[to.value][from.value] = weight;
  }
}

const graph: Graph = new Graph();

vertices.forEach(verticle => graph.addVertex(verticle.value));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

console.log(graph.adjacentList);
