import { Injectable } from '@nestjs/common';
import { ProfessionalInfo } from '../../../core/entities/domain/professional-info';
import { Studant } from '../../../core/entities/domain/studant';
import { StudantRepository } from '../../../core/repositories/studant.repository';
import { ICreateProfessionalInfoDTO } from '../../../shared/dto/create-professional-info.dto';

@Injectable()
export class StudantRepositoryMock implements StudantRepository {
  students = [];

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
  async create(input: any): Promise<Studant> {
    const newStudant = new Studant();
    this.students.push(newStudant);
    return newStudant;
  }
  findById(id: string): Promise<Studant> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<Studant[]> {
    const students = this.students;
    return students;
  }
  updateById(id: string): Promise<Studant> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
