import { Module } from '@nestjs/common';
import { StudentController } from 'src/presentation/controllers/student.controller';
import { makeInjectable } from 'src/shared/make-injectable.tool';
import { CreateStudantAccountCommand } from 'src/use-cases/command/student/create-studant-account.command';
import { FindAllStudentQuery } from 'src/use-cases/query/student/find-all-students.query';
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
