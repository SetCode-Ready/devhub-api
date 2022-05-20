import { CreateStudantAccountCommand } from './../../use-cases/command/studant/create-studant-account.command';
import { Module } from '@nestjs/common';
import { REPOSITORY } from 'src/core/constants/repository.enum';
import { StudantRepositoryMock } from 'src/data/mocks/repositories/studant.repository.mock';
import { FindAllStudentQuery } from 'src/use-cases/query/studant/find-all-students.query';
import { StudentController } from 'src/presentation/controllers/student.controller';

@Module({
  controllers: [StudentController],
  providers: [
    {
      provide: REPOSITORY.STUDANT_REPOSITORY,
      useClass: StudantRepositoryMock,
    },
    CreateStudantAccountCommand,
    FindAllStudentQuery,
  ],
})
export class StudantModule {}
