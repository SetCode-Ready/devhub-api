import { IStudantRepository } from 'src/core/repositories/studant.repository';
export class DeleteStudantAccountCommand {
  constructor(private readonly studantRepository: IStudantRepository) {}

  async execute(id: string): Promise<boolean> {
    await this.studantRepository.deleteById(id);

    return true;
  }
}
