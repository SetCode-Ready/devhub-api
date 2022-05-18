import { ProfessionalInfo } from './professional-info';
import { UserBase } from '../base/user.base';

export class Studant extends UserBase {
  constructor() {
    super();
  }

  professionalInfos: ProfessionalInfo;
}
