import { Comparator } from './Comparator';
import { ItemComparator } from './ItemComparator';
import { Item } from './Item';

export class Inventory {
  items: Item[];

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator) {
    if (!comparator) {
      return this.items.sort((a, b) => a.value - b.value);
    }

    return this.items.sort(comparator.compare);
  };

  public toString(): string {
    return this.items.map(el => el.name).join(', ');
  }
};
