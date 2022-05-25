import { ICreateStudantAccountRequest } from './../../shared/request-models/create-studant-account.request';
import { StudantServices } from './../../infra/ioc/studant.services';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class StudentController {
  constructor(private readonly studantServices: StudantServices) {}

  @Get('students')
  findAllStudents() {
    return this.studantServices.findAllStudentQuery();
  }

  @Post('create-studant-account')
  createStudantAccount(@Body() input: ICreateStudantAccountRequest) {
    return this.studantServices.createStudantAccountCommand(input);
  }
}
