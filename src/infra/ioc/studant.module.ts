import { CreateStudantAccountCommand } from '../../use-cases/command/student/create-studant-account.command';
import { Module } from '@nestjs/common';
import { REPOSITORY } from 'src/core/constants/repository.enum';
import { StudantRepositoryMock } from 'src/data/mocks/repositories/studant.repository.mock';
import { StudentController } from 'src/presentation/controllers/student.controller';
import { StudantServices } from './studant.services';

@Module({
  controllers: [StudentController],
  providers: [
    {
      provide: REPOSITORY.STUDANT_REPOSITORY,
      useClass: StudantRepositoryMock,
    },
    StudantServices,
  ],
})
export class StudantModule {}
