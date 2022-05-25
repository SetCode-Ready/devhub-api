import { ICreateStudantAccountRequest } from './../../shared/request-models/create-studant-account.request';
import { StudantServices } from './../../infra/ioc/studant.services';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Studant } from 'src/core/entities/domain/studant';

@Controller()
export class StudentController {
  constructor(private readonly studantServices: StudantServices) {}

  @Get('students')
  async findAllStudents(): Promise<Studant[]> {
    return this.studantServices.findAllStudent();
  }

  @Post('create-studant-account')
  async createStudantAccount(
    @Body() input: ICreateStudantAccountRequest,
  ): Promise<Studant> {
    return this.studantServices.createStudantAccount(input);
  }
}
