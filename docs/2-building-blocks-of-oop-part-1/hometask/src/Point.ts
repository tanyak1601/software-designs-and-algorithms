const DEFAUL_X = 0;
const DEFAULT_Y = 0;

export class Point {
  x: number;
  y: number;

  public constructor();
  public constructor(x: number, y: number);

  public constructor (x?: number, y?: number) {
      this.x = x ?? DEFAUL_X;
      this.y = y ?? DEFAULT_Y;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number ;
  public distance(obj: Point): number;
  public distance(x: number, y: number): number;
  public distance(...args: any[]): number {
    let x1: number;
    let y1: number;
    if (!args.length) {
      x1 = DEFAUL_X;
      y1 = DEFAULT_Y;
    } else if (args[0] instanceof Point) {
      x1 = args[0].x;
      y1 = args[0].y;
    } else {
      x1 = args[0];
      y1 = args[1];
    }

    return Math.sqrt(Math.pow((x1 -this.x), 2) + Math.pow((y1 - this.y), 2));
  }
}
