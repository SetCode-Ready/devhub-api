import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Studant } from '../../../core/entities/domain/studant';
import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';
import { CreateStudantAccountCommand } from '../../../use-cases/command/studant/create-studant-account.command';

describe('Criar uma conta do tipo Aluno', () => {
  let createStudantAccountCommand: CreateStudantAccountCommand;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Studant),
          useValue: StudantRepositoryMock,
        },
        CreateStudantAccountCommand,
      ],
    }).compile();

    createStudantAccountCommand = moduleRef.get<CreateStudantAccountCommand>(
      CreateStudantAccountCommand,
    );
  });

  it('Deve criar um novo usuário', async () => {
    const studant = await createStudantAccountCommand.execute({
      name: 'Kauê',
      email: 'minha@mao.com',
      password: 'asd232',
      birthDate: new Date(),
      registry: '2020111TADS0107',
    });

    expect(studant).toHaveProperty('id');
  });
});
