import { InvalidInputWhenCreateStudent } from './../../../core/exceptions/invalid-input-when-create-studant';
import { Studant } from './../../../core/entities/domain/studant';

import { CreateStudantAccountCommand } from '../../../use-cases/command/student/create-studant-account.command';
import { IStudantRepository } from 'src/core/repositories/studant.repository';
import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';

describe('Criar uma conta do tipo Aluno', () => {
  let createStudantAccountCommand: CreateStudantAccountCommand;
  let studantRepository: IStudantRepository;

  beforeAll(async () => {
    studantRepository = new StudantRepositoryMock();

    createStudantAccountCommand = new CreateStudantAccountCommand(
      studantRepository,
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

  it('Deve lançar um exceção se o argumento input não for passado', async () => {
    const studantToBeCreated = null;

    await expect(
      createStudantAccountCommand.execute(studantToBeCreated),
    ).rejects.toBeInstanceOf(InvalidInputWhenCreateStudent);
  });
});
