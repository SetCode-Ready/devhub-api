import { BaseEntity } from './base';

export class UserBase extends BaseEntity {
  email: string;
  name: string;
  registry: string;
  birthDate: Date;
}
