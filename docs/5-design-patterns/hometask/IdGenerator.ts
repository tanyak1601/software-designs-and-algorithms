import { IdGenerator } from './types';

export class FakeIdGenerator implements IdGenerator {
  private count: number = 0;

  public generate(): number {
    return ++this.count;
  }
}