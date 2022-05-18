export interface BaseRepository<T> {
  create(input: any): Promise<T>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  updateById(id: string): Promise<T>;
  deleteById(id: string): Promise<boolean>;
}
