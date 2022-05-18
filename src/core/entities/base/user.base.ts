import { BaseEntity } from './base';

export class UserBase extends BaseEntity {
  name: string;
  email: string;
  password: string;
  registry: string;
  birthDate: Date;
}
