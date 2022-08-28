import { IVertex, IEdge } from './types';

export class Vertex implements IVertex{
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class Edge implements IEdge {
  from: IVertex;
  to: IVertex;
  weight: number;

  constructor(from: IVertex, to: IVertex, weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight
  }
}

const vertex1: IVertex = new Vertex('1');
const vertex2: IVertex = new Vertex('2');
const vertex3: IVertex = new Vertex('3');
const vertex4: IVertex = new Vertex('4');
const vertex5: IVertex = new Vertex('5');

const edge1: IEdge = new Edge(vertex1, vertex4, 3);
const edge2: IEdge = new Edge(vertex1, vertex2, 5);
const edge3: IEdge = new Edge(vertex1, vertex3, 4);
const edge4: IEdge = new Edge(vertex2, vertex4, 6);
const edge5: IEdge = new Edge(vertex2, vertex3, 5);


export const vertices: IVertex[] = [vertex1, vertex2, vertex3, vertex4,];
export const edges: IEdge[] = [edge1, edge2, edge3, edge4, edge5];