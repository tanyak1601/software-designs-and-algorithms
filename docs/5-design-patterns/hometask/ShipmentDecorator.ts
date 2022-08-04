import { IShipment } from './types'

enum Codes {
  fragile = '**MARK FRAGILE**',
  doNotLeave = '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**',
  returnReceiptRequested = '**MARK RETURN RECEIPT REQUESTED**',
}

class ShipmentDecorator implements IShipment {
  protected wrappee: IShipment;

  constructor(shipment: IShipment) {
    this.wrappee = shipment;
  }

  public ship(): string { return this.wrappee.ship() }
}

export class ShipmentWithCodeDecorator extends ShipmentDecorator {
  private fragile: boolean;
  private doNotLeave: boolean;
  private returnReceiptRequested: boolean;

  constructor(shipment: IShipment, fragile: boolean, doNotLeave: boolean, returnReceiptRequested: boolean) {
    super(shipment);
    this.fragile = fragile;
    this.doNotLeave = doNotLeave;
    this.returnReceiptRequested = returnReceiptRequested;
  }

  public ship(): string {
    let code = '';
    if (this.fragile) {
      code += `\n${Codes.fragile}`;
    }
    if (this.doNotLeave) {
      code += `\n${Codes.doNotLeave}`;
    }
    if (this.returnReceiptRequested) {
      code += `\n${Codes.returnReceiptRequested}`;
    }

    return `${this.wrappee.ship()}${code}`;
  }
}