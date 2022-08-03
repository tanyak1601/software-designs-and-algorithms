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

export interface Strategy {
  execute(weight: number, zipCodeStart: string): number;
}

export interface Context {
  setStrategy(s: Strategy): void;
  execute(weight: number, zipCodeStart: string): number;
}

export enum ItemWeight {
  SMALL = 15,
  MEDIUD = 160,
}

export enum ItemType {
  LETTER_TYPE = 'Letter',
  PACKAGES_TYPE = 'Packages',
  OVERSIZE_TYPE = 'Oversize',
}

export enum ZipCodeTypes {
  AirEast = '3',
  ChicagoSprint = '6',
  PacificParcel = '9',
}

