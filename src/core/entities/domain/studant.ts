import { ProfessionalInfo } from './professional-info';
import { UserBase } from '../base/user.base';

export class Studant extends UserBase {
  constructor(name: string, email: string, password: string) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  professionalInfos: ProfessionalInfo;
}
