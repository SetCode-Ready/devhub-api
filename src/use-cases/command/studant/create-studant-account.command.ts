import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';
import { REPOSITORY } from './../../../core/constants/repository.enum';
import { Inject, Injectable } from '@nestjs/common';
import { ICreateStudantAccountRequest } from 'src/shared/request-models/create-studant-account.request';

@Injectable()
export class CreateStudantAccountCommand {
  constructor(
    @Inject(REPOSITORY.STUDANT_REPOSITORY)
    private readonly studantRepository: StudantRepositoryMock,
  ) {}

  async execute(input: ICreateStudantAccountRequest) {
    const newStudantAccount = await this.studantRepository.create(input);
    return newStudantAccount;
  }
}
