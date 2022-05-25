import { Injectable } from '@nestjs/common';
import { IStudantRepository } from 'src/core/repositories/studant.repository';

@Injectable()
export class FindAllStudentQuery {
  constructor(private readonly studantRepository: IStudantRepository) {}

  async execute() {
    const students = await this.studantRepository.findAll();
    return students;
  }
}
