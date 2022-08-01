import { IShipment, IdGenerator, ShipmentData } from './types'
import {} from './IdGenerator';

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

  private getCost(weight: number): number {
    return weight * this.RATE;
  }

  private getShipmentId(shipmentID: number): number {
    if (shipmentID) return shipmentID;
    return this.idGenerator.generate();
  }

  public ship(): string {
    const id: number = this.getShipmentId(this.shipmentID);
    const cost: number = this.getCost(this.weight);
    return `${id}, from: ${this.fromZipCode} ${this.fromAddress}, to: ${this.toZipCode} ${this.toAddress}, cost: ${cost}`;
  }
}