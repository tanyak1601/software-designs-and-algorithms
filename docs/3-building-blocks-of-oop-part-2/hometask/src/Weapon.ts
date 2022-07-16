import { Item } from './Item';

const DIGIT = 2;

export abstract class Weapon extends Item {
  MODIFIER_CHANGE_RATE = 0.05
  baseDamage: number;
  damageModifier: number = 0;
  baseDurability: number;
  durabilityModifier: number = 0;

  public constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight)
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  public getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  public toSrting(): string {
    const subStr = super.toSrting();
    return `${subStr}, Damage: ${this.getDamage().toFixed(DIGIT)}, Durability: ${(this.getDurability() * 100).toFixed(DIGIT)}%`;
  }

  public use(): string {
    const damage = this.getDamage().toFixed(DIGIT);
    const durability = this.getDurability();
    if (durability <= 0 ) {
      return `You can't use the ${this.name}, it is broken.`
    }

    let res: string;
    if ((durability - this.MODIFIER_CHANGE_RATE) <= 0) {
      res = `You use the ${this.name}, dealing ${damage} points of damage. The ${this.name} breaks.`
    } else {
      res = `You use the ${this.name}, dealing ${damage} points of damage.`
    }

    this.baseDamage = this.baseDamage - this.MODIFIER_CHANGE_RATE;
    return res;
  }
  
  abstract polish(): void;
};