import { Strategy, Context, ItemType } from './types';

export class ShipperContext implements Context {
  private strategy: Strategy;

  setStrategy(s: Strategy) {
    this.strategy = s;
  }

  execute(weight: number, zipCodeStart: string): number {
    return this.strategy.execute(weight, zipCodeStart);
  }
}

export class AirEastStrategy implements Strategy {
  private LETTER_RATE: number = 0.39;
  private PACKAGES_RATE: number = 0.25;
  private OVERSIZE_FEE: number = 10;


  execute(weight: number, type: ItemType ): number {
    if (type === ItemType.LETTER_TYPE) {
      return weight * this.LETTER_RATE;
    }

    if (type === ItemType.PACKAGES_TYPE) {
      return weight * this.PACKAGES_RATE;
    }

    return weight * this.PACKAGES_RATE + this.OVERSIZE_FEE;
  }
}

export class ChicagoSprintStrategy implements Strategy {
  private LETTER_RATE: number = 0.42;
  private PACKAGES_RATE: number = 0.20;

  execute(weight: number, type: ItemType ): number {
    if (type === ItemType.LETTER_TYPE) {
      return weight * this.LETTER_RATE;
    }

    if (type === ItemType.PACKAGES_TYPE) {
      return weight * this.PACKAGES_RATE;
    }

    return 0;
  }
}

export class PacificParcelStrategy implements Strategy {
  private LETTER_RATE: number = 0.51;
  private PACKAGES_RATE: number = 0.19;
  private OVERSIZE_FEE_PER_OUNCES: number = 0.02;


  execute(weight: number, type: ItemType ): number {
    if (type === ItemType.LETTER_TYPE) {
      return weight * this.LETTER_RATE;
    }

    if (type === ItemType.PACKAGES_TYPE) {
      return weight * this.PACKAGES_RATE;
    }

    return weight * this.PACKAGES_RATE + this.OVERSIZE_FEE_PER_OUNCES * weight;
  }
}