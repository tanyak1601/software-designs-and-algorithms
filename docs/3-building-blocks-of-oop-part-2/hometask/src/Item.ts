import { Comparable } from './Comparable';

export const GREATER = 1;
export const LESS = -1;

let counter = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  value: number;
  name: string;
  weight: number;

  static get numberOfItems(): number {
    return counter;
  }

  static reset(): void {
    counter = 0;
  }
    
  public constructor (name: string, value: number, weight: number) {
    this.id = Item.numberOfItems;
    this.name = name;
    this.value = value;
    this.weight = weight;
    counter++;
  }

  public getId(): number {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }

  public getWeigth(): number {
    return this.weight;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }


  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.toLowerCase() > other.name.toLowerCase() ? GREATER : LESS;
    }

    return this.value > other.value ? GREATER : LESS;
  }

  public toSrting(): string {
    return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
  }
}
