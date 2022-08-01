import { IApi, ShipmentData } from './types';
import { api } from './Client';

class FEClient {
  private api: IApi;

  public constructor(api: IApi) {
    this.api = api;
  }

  public shipItem(data: ShipmentData): void {
    const res: string = this.api?.shipItem(data);
    console.log(res);
  }
}

const client = new FEClient(api);

client.shipItem({
  shipmentID: 1,
  weight: 5,
  fromAddress: 'Minsk',
  fromZipCode: '12345',
  toAddress: 'New York',
  toZipCode: '55555',
});