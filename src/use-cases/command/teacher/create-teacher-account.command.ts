import { InvalidInputWhenCreateAccount } from 'src/core/exceptions/invalid-input-when-create-studant';
import { ITeacherRepository } from 'src/core/repositories/teacher.repository';
import { ICreateTeacherAccountRequest } from 'src/shared/request-models/create-teacher-account.request';

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
