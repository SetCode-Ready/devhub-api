import { ICreateTeacherAccountRequest } from './../../../shared/request-models/create-teacher-account.request';
import { CreateTeacherAccountCommand } from './../../../use-cases/command/teacher/create-teacher-account.command';
import { FindAllTeachersQuery } from './../../../use-cases/query/teacher/find-all-teachers.query';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
  constructor(
    @Inject('FindAllTeachersQuery')
    private readonly findAllTeachersQuery: FindAllTeachersQuery,
    @Inject('CreateTeacherAccountCommand')
    private readonly createTeacherAccountCommand: CreateTeacherAccountCommand,
  ) {}

  async createTeacherAccount(input: ICreateTeacherAccountRequest) {
    return this.createTeacherAccountCommand.execute(input);
  }

  async findAllTeachers() {
    return this.findAllTeachersQuery.execute();
  }
}
