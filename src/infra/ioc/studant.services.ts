import { FindAllStudentQuery } from './../../use-cases/query/student/find-all-students.query';
import { ICreateStudantAccountRequest } from './../../shared/request-models/create-studant-account.request';
import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY } from 'src/core/constants/repository.enum';
import { IStudantRepository } from 'src/core/repositories/studant.repository';
import { CreateStudantAccountCommand } from 'src/use-cases/command/student/create-studant-account.command';

@Injectable()
export class StudantServices {
  constructor(
    @Inject('FindAllStudentQuery')
    private readonly findAllStudentQuery: FindAllStudentQuery,
    @Inject('CreateStudantAccountCommand')
    private readonly createStudantAccountCommand: CreateStudantAccountCommand,
  ) {}

  async findAllStudent() {
    return this.findAllStudentQuery.execute();
  }

  async createStudantAccount(input: ICreateStudantAccountRequest) {
    return this.createStudantAccountCommand.execute(input);
  }
}
