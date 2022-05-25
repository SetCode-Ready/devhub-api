import { InvalidInputWhenCreateStudent } from '../../../core/exceptions/invalid-input-when-create-studant';
import { ICreateStudantAccountRequest } from 'src/shared/request-models/create-studant-account.request';
import { IStudantRepository } from 'src/core/repositories/studant.repository';

export class CreateStudantAccountCommand {
  constructor(private readonly studantRepository: IStudantRepository) {}

  async execute(input: ICreateStudantAccountRequest) {
    if (!input) {
      throw new InvalidInputWhenCreateStudent(
        'Envie os dados corretamente!',
        400,
      );
    }

    const newStudantAccount = await this.studantRepository.create(input);
    return newStudantAccount;
  }
}
