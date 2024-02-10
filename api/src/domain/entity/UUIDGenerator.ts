import ctypto from 'node:crypto';

export default class UUIDGenerator {
  static generate(): string {
    return crypto.randomUUID()
  }
}