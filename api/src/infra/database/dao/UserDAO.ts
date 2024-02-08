import UserEntity from '@domain/entity/UserEntity';
import DAO from '@domain/dao/DAO';

export default class UserDAO implements DAO<UserEntity> {
  create(data: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  
  findById(id: number): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
}