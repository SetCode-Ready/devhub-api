import { Studant } from './../../../core/entities/domain/studant';
import { Test, TestingModule } from '@nestjs/testing';
import { REPOSITORY } from '../../../core/constants/repository.enum';
import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';
import { CreateStudantAccountCommand } from '../../../use-cases/command/studant/create-studant-account.command';

describe('Criar uma conta do tipo Aluno', () => {
  let createStudantAccountCommand: CreateStudantAccountCommand;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: REPOSITORY.STUDANT_REPOSITORY,
          useClass: StudantRepositoryMock,
        },
        CreateStudantAccountCommand,
      ],
    }).compile();

    createStudantAccountCommand = moduleRef.get<CreateStudantAccountCommand>(
      CreateStudantAccountCommand,
    );
  });

  it('Deve criar um novo usuário', async () => {
    const studantToBeCreated = {
      name: 'Kauê',
      email: 'minha@mao.com',
      password: 'asd232',
      birthDate: new Date(),
      registry: '2020111TADS0107',
    };

    const studant = await createStudantAccountCommand.execute(
      studantToBeCreated,
    );

    expect(studant).toBeInstanceOf(Studant);
  });
});
