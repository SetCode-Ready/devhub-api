import { InvalidInputWhenCreateAccount } from './../../../core/exceptions/invalid-input-when-create-studant';
import { CreateTeacherAccountCommand } from './../../../use-cases/command/teacher/create-teacher-account.command';
import { Teacher } from './../../../core/entities/domain/teacher';
import { TeacherRepositoryMock } from './../../../data/mocks/repositories/teacher.repository.mock';
import { ITeacherRepository } from './../../../core/repositories/teacher.repository';

describe('Criar uma conta do tipo Aluno', () => {
  let createTeacherAccountCommand: CreateTeacherAccountCommand;
  let teacherRepository: ITeacherRepository;

  beforeAll(async () => {
    teacherRepository = new TeacherRepositoryMock();

    createTeacherAccountCommand = new CreateTeacherAccountCommand(
      teacherRepository,
    );
  });

  it('Deve criar um novo usuário', async () => {
    const teacherToBeCreated = {
      name: 'Kauê',
      email: 'minha@mao.com',
      password: 'asd232',
      birthDate: new Date(),
      registry: '2020111TADS0107',
      specialization: 'asdfg',
    };

    const teacher = await createTeacherAccountCommand.execute(
      teacherToBeCreated,
    );

    expect(teacher).toBeInstanceOf(Teacher);
  });

  it('Deve lançar um exceção se o argumento input não for passado', async () => {
    const studantToBeCreated = null;

    await expect(
      createTeacherAccountCommand.execute(studantToBeCreated),
    ).rejects.toBeInstanceOf(InvalidInputWhenCreateAccount);
  });
});
