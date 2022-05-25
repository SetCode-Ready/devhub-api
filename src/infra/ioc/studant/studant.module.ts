import { FindAllStudentQuery } from './../../use-cases/query/student/find-all-students.query';
import { Module } from '@nestjs/common';
import { StudantRepositoryMock } from 'src/data/mocks/repositories/studant.repository.mock';
import { StudentController } from 'src/presentation/controllers/student.controller';
import { makeInjectable } from 'src/shared/make-injectable.tool';
import { CreateStudantAccountCommand } from 'src/use-cases/command/student/create-studant-account.command';
import { StudantServices } from './studant.services';

@Module({
  controllers: [StudentController],
  providers: [
    StudantServices,
    makeInjectable(FindAllStudentQuery),
    makeInjectable(CreateStudantAccountCommand),
  ],
})
export class StudantModule {}
