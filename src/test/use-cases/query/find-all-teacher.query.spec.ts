import { TeacherRepositoryMock } from './../../../data/mocks/repositories/teacher.repository.mock';
import { ITeacherRepository } from './../../../core/repositories/teacher.repository';
import { FindAllTeachersQuery } from './../../../use-cases/query/teacher/find-all-teachers.query';
import { CreateTeacherAccountCommand } from './../../../use-cases/command/teacher/create-teacher-account.command';

describe('Buscar todos os professores', () => {
  let findAllTeacherQuery: FindAllTeachersQuery;
  let createTeacherAccountCommand: CreateTeacherAccountCommand;
  let teacherRepository: ITeacherRepository;

  beforeAll(async () => {
    teacherRepository = new TeacherRepositoryMock();

    createTeacherAccountCommand = new CreateTeacherAccountCommand(
      teacherRepository,
    );
    findAllTeacherQuery = new FindAllTeachersQuery(teacherRepository);
  });

  it('Deve trazer um array de professores vazio', async () => {
    const teacher = await findAllTeacherQuery.execute();

    expect(teacher).toHaveLength(0);
  });

  it('Deve retornar um array com 1 professor', async () => {
    const teacherToBeCreated = {
      name: 'Kauê',
      email: 'minha@mao.com',
      password: 'asd232',
      birthDate: new Date(),
      registry: '2020111TADS0107',
      specialization: 'asdf',
    };

    await createTeacherAccountCommand.execute(teacherToBeCreated);

    const studant = await findAllTeacherQuery.execute();
    expect(studant).toHaveLength(1);
  });
});
