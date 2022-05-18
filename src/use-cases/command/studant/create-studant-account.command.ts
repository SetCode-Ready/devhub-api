import { StudantRepository } from 'src/core/repositories/studant.repository';
import { ICreateStudantAccountRequest } from 'src/shared/request-models/create-studant-account.request';

export class CreateStudantAccountCommand {
  constructor(private readonly studantRepository: StudantRepository) {}

  async execute(input: ICreateStudantAccountRequest) {
    const newStudantAccount = await this.studantRepository.create(input);
    return newStudantAccount;
  }
}
