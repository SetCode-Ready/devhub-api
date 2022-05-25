import { REPOSITORY } from 'src/core/constants/repository.enum';
import { Inject, Injectable } from '@nestjs/common';
import { IStudantRepository } from 'src/core/repositories/studant.repository';

@Injectable()
export class FindAllStudentQuery {
  constructor(
    @Inject(REPOSITORY.STUDANT_REPOSITORY)
    private readonly studantRepository: IStudantRepository,
  ) {}

  async execute() {
    const students = await this.studantRepository.findAll();
    return students;
  }
}
