import { IDijkstra, IVertex, Path, WeightedGraph } from './types'
import { Vertex } from './VertecesAndEdges';

class Dijkstra implements IDijkstra {
  graph: object;

  constructor(graph: WeightedGraph) {
    this.graph = graph.adjacentList;
  }

  private getNextVertex(distances: object, visited: string[]): string {
    let next: string;
    let smallerDistance: number;
    for (let i in distances) {
      if (!visited.includes(i)) {
        if (!next) {
          next = i
          smallerDistance = distances[i]
        } else if (distances[i] < smallerDistance) {
          next = i;
          smallerDistance = distances[i]
        }
      }
    }

    return next;
  }

  findShortestPath(vertex1: IVertex, vertex2: IVertex): Path {
    if (vertex1.value === vertex2.value) {
      return ({
        path: [vertex1.value], 
        distance: 0,
      });
    }

    const distances = {};
    const parents = {};
    const visited = [];
    let current = vertex1.value;

    while (current) {
      const children = this.graph[current];

      for (let child in children) {
        if (child === vertex1.value) continue;

        const newDistance = distances[current] 
          ? distances[current] + children[child] 
          : children[child];

        if (!distances[child] || distances[child] > newDistance) {
          distances[child] = newDistance;
          parents[child] = current;
        }
      }

      visited.push(current);
      current = this.getNextVertex(distances, visited);
    }

    const distance = distances[vertex2.value]

    if (!distance) {
      return ({ path: [], distance : Infinity })
    }

    const path = [vertex2.value];
    let parent = parents[vertex2.value];
    while (parent) {
      path.unshift(parent);
      parent = parents[parent];
    }
    
    return ({ path, distance });
  }

  findAllShortestPaths(vertex: IVertex): Record<string, Path> {
    const res = {};
    for (let i in this.graph) {
      if (vertex.value !== i) {
        res[i] = this.findShortestPath(vertex, new Vertex(i)) as Path
      }
    }

    return res;
  }
}