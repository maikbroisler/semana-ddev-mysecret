export default interface DAO <T>{
  create(data: T): Promise<T>;
  findById(userId: string): Promise<T | null>;
}