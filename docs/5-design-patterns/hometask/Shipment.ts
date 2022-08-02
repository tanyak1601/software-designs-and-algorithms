import { IShipment, IdGenerator, ShipmentData, IShipper } from './types'
import { ShipperFactory } from './Shipper';

export class Shipment implements IShipment{
  private RATE: number = 39;

  private shipmentID: number;
  private weight: number;
  private fromAddress: string;
  private fromZipCode: string;
  private toAddress: string;
  private toZipCode: string;
  private idGenerator: IdGenerator;

  public constructor(shipmentData: ShipmentData, idGenerator: IdGenerator) {
    this.shipmentID = shipmentData?.shipmentID;
    this.weight = shipmentData?.weight;
    this.fromAddress = shipmentData?.fromAddress;
    this.fromZipCode = shipmentData?.fromZipCode;
    this.toAddress = shipmentData?.toAddress;
    this.toZipCode = shipmentData?.toZipCode;
    this.idGenerator = idGenerator;
  }

  private getShipmentId(shipmentID: number): number {
    if (shipmentID) return shipmentID;
    return this.idGenerator.generate();
  }

  public ship(): string {
    const id: number = this.getShipmentId(this.shipmentID);
    const shipper = new ShipperFactory(this.weight, this.fromZipCode) as IShipper;
    const cost: number = shipper.getCost();
    return `${id}, from: ${this.fromZipCode} ${this.fromAddress}, to: ${this.toZipCode} ${this.toAddress}, cost: ${cost}`;
  }
}