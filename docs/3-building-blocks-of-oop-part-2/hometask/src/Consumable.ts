import { Item } from './Item';

export abstract class Consumable extends Item {
  consumed: boolean = false;
  spoiled: boolean;

  public constructor (name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight)
    this.spoiled = spoiled;
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

  public eat(): string {
    return `You eat the ${this.name}.`;
  }

  public use(): string {
    if (!this.consumed && !this.spoiled) {
      return this.eat();
    } else if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`;
    } else {
      return `${this.eat()} You feel sick.`;
    }
  }

  public toSrting(): string {
      return super.toSrting();
  }
}
  