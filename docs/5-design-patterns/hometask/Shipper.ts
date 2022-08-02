import { IShipper } from './types';

enum ZipCodeTypes {
  AirEast = '3',
  ChicagoSprint = '6',
  PacificParcel = '9',
}

abstract class Shipper implements IShipper {
  rate: number
  private weight: number;

  constructor(weight: number) {
    this.weight = weight;
  }

  public getCost(): number {
    return this.weight * this.rate;
  };
};

class AirEastShipper extends Shipper {
  private RATE: number = 39;

  constructor(weight: number) {
    super(weight);
    this.rate = this.RATE;
  }
}

class ChicagoSprintShipper extends Shipper {
  private RATE: number = 42;

  constructor(weight: number) {
    super(weight);
    this.rate = this.RATE;
  }
}

class PacificParcelShipper extends Shipper {
  private RATE: number = 51;

  constructor(weight: number) {
    super(weight);
    this.rate = this.RATE;
  }
}

export class ShipperFactory {
  constructor(weight: number, fromZipCode: string) {
    const zipCodeStart = fromZipCode[0]

    if (zipCodeStart <= ZipCodeTypes.AirEast) {
      return new AirEastShipper(weight);
    }

    if (zipCodeStart <= ZipCodeTypes.ChicagoSprint) {
      return new ChicagoSprintShipper(weight);
    }

    if (zipCodeStart <= ZipCodeTypes.PacificParcel) {
      return new PacificParcelShipper(weight);
    }
  }
}