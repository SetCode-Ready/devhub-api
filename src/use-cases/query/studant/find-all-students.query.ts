import { StudantRepository } from 'src/core/repositories/studant.repository';

export class FindAllStudentQuery {
  constructor(private readonly studantRepository: StudantRepository) {}

  async execute() {
    const students = await this.studantRepository.findAll();
    return students;
  }
}
