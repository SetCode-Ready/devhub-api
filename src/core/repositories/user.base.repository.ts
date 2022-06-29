import { BaseRepository } from './base.repository';

export interface UserBaseRepository<U> extends BaseRepository<U> {
  findByRegistry(registry: string): Promise<U>;
  findByEmail(email: string): Promise<U>;
}
