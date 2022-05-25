import { ICreateStudantAccountRequest } from './../../shared/request-models/create-studant-account.request';
import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY } from 'src/core/constants/repository.enum';
import { IStudantRepository } from 'src/core/repositories/studant.repository';
import { CreateStudantAccountCommand } from 'src/use-cases/command/student/create-studant-account.command';
import { FindAllStudentQuery } from 'src/use-cases/query/student/find-all-students.query';

@Injectable()
export class StudantServices {
  constructor(
    @Inject(REPOSITORY.STUDANT_REPOSITORY)
    private readonly studantRepository: IStudantRepository,
  ) {}

  async findAllStudentQuery() {
    return new FindAllStudentQuery(this.studantRepository).execute();
  }

  async createStudantAccountCommand(input: ICreateStudantAccountRequest) {
    return new CreateStudantAccountCommand(this.studantRepository).execute(
      input,
    );
  }
}
