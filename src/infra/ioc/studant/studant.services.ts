import { FindStudentByIdQuery } from './../../../use-cases/query/student/find-student-by-id.query';
import { DeleteStudantAccountCommand } from './../../../use-cases/command/student/delete-studant-account.command';
import { IUpdateStudant } from 'src/shared/request-models/update-studant.request';
import { UpdateStudantCommand } from './../../../use-cases/command/student/update-studant.command';
import { FindAllStudentQuery } from '../../../use-cases/query/student/find-all-students.query';
import { ICreateStudantAccountRequest } from '../../../shared/request-models/create-studant-account.request';
import { Inject, Injectable } from '@nestjs/common';
import { CreateStudantAccountCommand } from 'src/use-cases/command/student/create-studant-account.command';

@Injectable()
export class StudantServices {
  constructor(
    @Inject('FindAllStudentQuery')
    private readonly findAllStudentQuery: FindAllStudentQuery,
    @Inject('FindStudentByIdQuery')
    private readonly findStudentByIdQuery: FindStudentByIdQuery,
    @Inject('CreateStudantAccountCommand')
    private readonly createStudantAccountCommand: CreateStudantAccountCommand,
    @Inject('UpdateStudantCommand')
    private readonly updateStudantCommand: UpdateStudantCommand,
    @Inject('DeleteStudantAccountCommand')
    private readonly deleteStudantAccountCommand: DeleteStudantAccountCommand,
  ) {}

  async findAllStudent() {
    return this.findAllStudentQuery.execute();
  }

  async findStudentById(id: string) {
    return this.findStudentByIdQuery.execute(id);
  }

  async createStudantAccount(input: ICreateStudantAccountRequest) {
    return this.createStudantAccountCommand.execute(input);
  }

  async updateStudant(input: IUpdateStudant) {
    return this.updateStudantCommand.execute(input);
  }

  async deleteStudantAccount(id: string) {
    return this.deleteStudantAccountCommand.execute(id);
  }
}
