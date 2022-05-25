import { IStudantRepository } from 'src/core/repositories/studant.repository';

export class FindStudentByIdQuery {
  constructor(private readonly studantRepository: IStudantRepository) {}

  async execute(id: string) {
    const studant = await this.studantRepository.findById(id);

    return studant;
  }
}
