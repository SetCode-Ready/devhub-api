import { Studant } from 'src/core/entities/domain/studant';
import { IStudantRepository } from 'src/core/repositories/studant.repository';
import { IUpdateStudant } from 'src/shared/request-models/update-studant.request';

export class UpdateStudanteCommand {
  constructor(private readonly studantRepository: IStudantRepository) {}

  async execute(input: IUpdateStudant): Promise<Studant> {
    const updatedStudant = await this.studantRepository.updateById(
      input.id,
      input,
    );

    return updatedStudant;
  }
}
