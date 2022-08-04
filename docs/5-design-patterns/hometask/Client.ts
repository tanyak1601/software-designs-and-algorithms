import { Shipment } from './Shipment';
import { IApi, ShipmentData, IdGenerator, IShipment, Context } from './types';
import { FakeIdGenerator } from './IdGenerator';
import { ShipperContext } from './ShipperStrategy';
import { ShipmentWithCodeDecorator } from './ShipmentDecorator';

export class Client implements IApi {
  private idGenerator: IdGenerator;
  private shipperCostContext: Context;

  public constructor(idGenerator: IdGenerator, shipperCostContext: Context) {
    this.idGenerator = idGenerator;
  }

  public shipItem(shipmentData: ShipmentData): string {
    const { fragile, doNotLeave, returnReceiptRequested } = shipmentData
    let shipment: IShipment = new Shipment(shipmentData, this.idGenerator, this.shipperCostContext);
    shipment = new ShipmentWithCodeDecorator(shipment, fragile, doNotLeave, returnReceiptRequested); 
    return shipment?.ship();
  }
}

export const api = new Client(new FakeIdGenerator(), new ShipperContext());