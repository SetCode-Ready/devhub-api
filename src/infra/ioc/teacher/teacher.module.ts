import { TeacherService } from './teacher.service';
import { Module } from '@nestjs/common';
import { makeInjectable } from 'src/shared/make-injectable.tool';
import { CreateTeacherAccountCommand } from 'src/use-cases/command/teacher/create-teacher-account.command';
import { FindAllTeachersQuery } from 'src/use-cases/query/teacher/find-all-teachers.query';

@Module({
  providers: [
    TeacherService,
    makeInjectable(CreateTeacherAccountCommand),
    makeInjectable(FindAllTeachersQuery),
  ],
})
export class TeacherModule {}
