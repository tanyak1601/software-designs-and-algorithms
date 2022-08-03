import { IShipment, IdGenerator, ShipmentData, IShipper, ItemWeight, ItemType, Strategy, ZipCodeTypes, Context } from './types'
import { AirEastStrategy, ChicagoSprintStrategy, PacificParcelStrategy } from './ShipperStrategy';

export class Shipment implements IShipment{
  private RATE: number = 39;

  private shipmentID: number;
  private weight: number;
  private fromAddress: string;
  private fromZipCode: string;
  private toAddress: string;
  private toZipCode: string;
  private idGenerator: IdGenerator;
  private shipperCostContext: Context;

  public constructor(shipmentData: ShipmentData, idGenerator: IdGenerator, shipperCostContext: Context) {
    this.shipmentID = shipmentData?.shipmentID;
    this.weight = shipmentData?.weight;
    this.fromAddress = shipmentData?.fromAddress;
    this.fromZipCode = shipmentData?.fromZipCode;
    this.toAddress = shipmentData?.toAddress;
    this.toZipCode = shipmentData?.toZipCode;
    this.idGenerator = idGenerator;
    this.shipperCostContext = shipperCostContext
  }

  private getShipmentId(shipmentID: number): number {
    if (shipmentID) return shipmentID;
    return this.idGenerator.generate();
  }

  private getItemType(weight: number): ItemType {
    if (weight <= ItemWeight.SMALL) {
      return ItemType.LETTER_TYPE;
    }

    if (weight <= ItemWeight.MEDIUD) {
      return ItemType.PACKAGES_TYPE;
    }

    return ItemType.OVERSIZE_TYPE;
  }

  private getShipperStrategy(zipCodeStart: string): Strategy {
    if (zipCodeStart <= ZipCodeTypes.AirEast) {
      return new AirEastStrategy();
    }

    if (zipCodeStart <= ZipCodeTypes.ChicagoSprint) {
      return new ChicagoSprintStrategy();
    }

    return new PacificParcelStrategy();
  }

  public ship(): string {
    const id: number = this.getShipmentId(this.shipmentID);
    const zipCodeStart: string = this.fromZipCode[0];
    const type: ItemType = this.getItemType(this.weight);
    const strategy: Strategy = this.getShipperStrategy(zipCodeStart)
    this.shipperCostContext.setStrategy(strategy);
    const cost: number = this.shipperCostContext.execute(this.weight, type);
    return `${id}, from: ${this.fromZipCode} ${this.fromAddress}, to: ${this.toZipCode} ${this.toAddress}, cost: ${cost}`;
  }
}