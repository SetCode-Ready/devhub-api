import { ITeacherRepository } from './../../../core/repositories/teacher.repository';
import { Injectable } from '@nestjs/common';
import { Teacher } from '../../../core/entities/domain/teacher';
import { ProfessionalInfo } from '../../../core/entities/domain/professional-info';
import { ICreateProfessionalInfoDTO } from '../../../shared/dto/create-professional-info.dto';

@Injectable()
export class TeacherRepositoryMock implements ITeacherRepository {
  private teachers = [];

  createProfessionalInfo(
    input: ICreateProfessionalInfoDTO,
  ): Promise<ProfessionalInfo> {
    throw new Error('Method not implemented.');
  }
  findByRegistry(registry: string): Promise<Teacher> {
    throw new Error('Method not implemented.');
  }
  findByEmail(email: string): Promise<Teacher> {
    throw new Error('Method not implemented.');
  }
  public async create(input: any): Promise<Teacher> {
    const newTeacher = new Teacher();

    Object.assign(newTeacher, { id: 'uuid', ...input });

    this.teachers.push(newTeacher);
    return newTeacher;
  }
  findById(id: string): Promise<Teacher> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<Teacher[]> {
    return this.teachers;
  }
  updateById(id: string): Promise<Teacher> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
