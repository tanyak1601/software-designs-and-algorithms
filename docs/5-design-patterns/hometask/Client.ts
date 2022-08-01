import { Shipment } from './Shipment';
import { IApi, ShipmentData, IdGenerator, IShipment } from './types';
import { FakeIdGenerator } from './IdGenerator';

export class Client implements IApi {
  private idGenerator: IdGenerator;
  public constructor(idGenerator: IdGenerator) {
    this.idGenerator = idGenerator;
  }

  public shipItem(shipmentData: ShipmentData): string {
    const shipment: IShipment = new Shipment(shipmentData, this.idGenerator);
    return shipment?.ship();
  }
}

export const api = new Client(new FakeIdGenerator());