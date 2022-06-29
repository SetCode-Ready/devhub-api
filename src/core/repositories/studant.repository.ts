import { ICreateProfessionalInfoDTO } from 'src/shared/dto/create-professional-info.dto';
import { ProfessionalInfo } from '../entities/domain/professional-info';
import { Studant } from '../entities/domain/studant';
import { UserBaseRepository } from './user.base.repository';

export interface IStudantRepository extends UserBaseRepository<Studant> {
  createProfessionalInfo(
    input: ICreateProfessionalInfoDTO,
  ): Promise<ProfessionalInfo>;
}
