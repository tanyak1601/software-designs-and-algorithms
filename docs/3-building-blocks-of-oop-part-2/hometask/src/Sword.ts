import { Weapon } from './Weapon';

const NAME = 'sword';
const DAMAGE_INDEX = 0.25

export class Sword extends Weapon {
  public constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(NAME, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const damage = this.getDamage();
    const newDamageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
    this.damageModifier = (newDamageModifier / damage) <= DAMAGE_INDEX ? newDamageModifier : DAMAGE_INDEX * damage;
  }
};