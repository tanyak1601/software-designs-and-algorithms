import { Weapon } from './Weapon';

const NAME = 'bow';
const MAX_VALUE = 1;

export class Sword extends Weapon {
  public constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(NAME, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const newDurabilityModifier = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
    this.durabilityModifier= newDurabilityModifier <= MAX_VALUE ? newDurabilityModifier : MAX_VALUE;
  }
};