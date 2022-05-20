import { Injectable } from '@nestjs/common';
import { ProfessionalInfo } from '../../../core/entities/domain/professional-info';
import { Studant } from '../../../core/entities/domain/studant';
import { IStudantRepository } from '../../../core/repositories/studant.repository';
import { ICreateProfessionalInfoDTO } from '../../../shared/dto/create-professional-info.dto';

@Injectable()
export class StudantRepositoryMock implements IStudantRepository {
  private students = [];

  createProfessionalInfo(
    input: ICreateProfessionalInfoDTO,
  ): Promise<ProfessionalInfo> {
    throw new Error('Method not implemented.');
  }
  findByRegistry(registry: string): Promise<Studant> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<Studant> {
    throw new Error('Method not implemented.');
  }
  public async create(input: any): Promise<Studant> {
    const newStudant = new Studant();

    Object.assign(newStudant, { id: 'uuid', ...input });

    this.students.push(newStudant);
    return newStudant;
  }
  findById(id: string): Promise<Studant> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<Studant[]> {
    return this.students;
  }
  updateById(id: string): Promise<Studant> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
