import { Point } from './Point';

const DEFAUL_COLOR = 'green';
export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  public constructor(points: Point[]);
  public constructor(points: Point[], color: string, filled: boolean);
  public constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error('At least 3 points required');
    }
    this.points = points;
    this.color = color ?? 'green';
    this.filled = filled ?? true;
  }

  public toString(): string {
    const points = this.points.map(el => el.toString()).join(', ');
    return `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points: ${points}.`;
  }

  public getPerimeter(): number {
    return [...this.points, this.points[0]].reduce((acc, el, index, arr) => {
      if (arr[index + 1]) {
        return acc + el.distance(arr[index + 1]);
      }
      return acc;
    }, 0);
  }

  abstract getType(): string;
}
