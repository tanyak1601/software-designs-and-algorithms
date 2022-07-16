import { Item, GREATER, LESS } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    if (first.weight === second.weight) {
      return first.compareTo(second);
    }

    return first.weight > second.weight ? GREATER : LESS;
  }
}
