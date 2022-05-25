import { Injectable } from '@nestjs/common';
import { ITeacherRepository } from 'src/core/repositories/teacher.repository';

@Injectable()
export class FindAllTeachersQuery {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  execute() {
    return this.teacherRepository.findAll();
  }
}
