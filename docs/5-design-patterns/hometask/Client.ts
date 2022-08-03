import { Shipment } from './Shipment';
import { IApi, ShipmentData, IdGenerator, IShipment, Context } from './types';
import { FakeIdGenerator } from './IdGenerator';
import { ShipperContext } from './ShipperStrategy';

export class Client implements IApi {
  private idGenerator: IdGenerator;
  private shipperCostContext: Context;

  public constructor(idGenerator: IdGenerator, shipperCostContext: Context) {
    this.idGenerator = idGenerator;
  }

  public shipItem(shipmentData: ShipmentData): string {
    const shipment: IShipment = new Shipment(shipmentData, this.idGenerator, this.shipperCostContext);
    return shipment?.ship();
  }
}

export const api = new Client(new FakeIdGenerator(), new ShipperContext());