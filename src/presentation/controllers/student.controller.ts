import { FindAllStudentQuery } from '../../use-cases/query/studant/find-all-students.query';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class StudentController {
  constructor(private readonly findAllStudentQuery: FindAllStudentQuery) {}

  @Get('students')
  findAllStudents() {
    return this.findAllStudentQuery.execute();
  }
}
