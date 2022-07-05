import { Shape } from './Shape';
import { Point } from './Point';

enum Triangles {
  equilateral ='equilateral triangle',
  isosceles = 'isosceles triangle',
  scalene = 'scalene triangle',
}

const delta = 0.001;

export class Triangle extends Shape {
  public constructor(vertice1: Point, vertice2: Point, vertice3: Point);
  public constructor(vertice1: Point, vertice2: Point, vertice3: Point, color: string, filled: boolean)
  public constructor(vertice1: Point, vertice2: Point, vertice3: Point, color?: string, filled?: boolean) {
    if (color && filled) {
      super([vertice1, vertice2, vertice3], color, filled);
    } else {
      super([vertice1, vertice2, vertice3]);
    }
  }
  public toString(): string {
    const points = this.points.map(el => el.toString());
    return `Triangle[v1=${points[0]},v2=${points[1]},v3=${points[2]}]`;
  }

  public getType(): string {
    const points = [...this.points];
    const distance1 = points[0].distance(points[1]);
    const distance2 = points[1].distance(points[2]);
    const distance3 = points[2].distance(points[0]);    

    if (Math.abs(distance1 - distance2) < delta && Math.abs(distance1 - distance3) < delta) {
      return Triangles.equilateral;
    }

    if (distance1 === distance2 || distance1 === distance3 || distance2 === distance3) {
      return Triangles.isosceles;
    }
    
    return Triangles.scalene;
  }
}
