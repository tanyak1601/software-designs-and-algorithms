export interface IdGenerator {
  generate(): number;
};

export interface IShipment {
  ship(): string;
}

export type ShipmentData = {
  shipmentID: number;
  weight: number;
  fromAddress: string;
  fromZipCode: string;
  toAddress: string;
  toZipCode: string;
};

export interface IApi {
  shipItem(shipmentData: ShipmentData): string;
}

export interface IShipper {
  getCost(): number;
}