import { InvalidInputWhenCreateAccount } from './../../../core/exceptions/invalid-input-when-create-studant';
import { ICreateTeacherAccountRequest } from './../../../shared/request-models/create-teacher-account.request';
import { ITeacherRepository } from './../../../core/repositories/teacher.repository';
export class CreateTeacherAccountCommand {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  async execute(input: ICreateTeacherAccountRequest) {
    if (!input) {
      throw new InvalidInputWhenCreateAccount(
        'Envie os dados corretamente!',
        400,
      );
    }

    const newTacherAccount = await this.teacherRepository.create(input);

    return newTacherAccount;
  }
}
