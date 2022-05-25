import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';
import { IStudantRepository } from './../../../core/repositories/studant.repository';
import { FindAllStudentQuery } from './../../../use-cases/query/student/find-all-students.query';
import { CreateStudantAccountCommand } from '../../../use-cases/command/student/create-studant-account.command';
describe('Buscar todos os alunos', () => {
  let findAllStudentQuery: FindAllStudentQuery;
  let createStudantAccountCommand: CreateStudantAccountCommand;
  let studantRepository: IStudantRepository;

  beforeAll(async () => {
    studantRepository = new StudantRepositoryMock();

    createStudantAccountCommand = new CreateStudantAccountCommand(
      studantRepository,
    );
    findAllStudentQuery = new FindAllStudentQuery(studantRepository);
  });

  it('Deve trazer um array de alunos vazio', async () => {
    const studant = await findAllStudentQuery.execute();

    expect(studant).toHaveLength(0);
  });

  it('Deve retornar um array com 1 aluno', async () => {
    const studantToBeCreated = {
      name: 'Kauê',
      email: 'minha@mao.com',
      password: 'asd232',
      birthDate: new Date(),
      registry: '2020111TADS0107',
    };

    await createStudantAccountCommand.execute(studantToBeCreated);

    const studant = await findAllStudentQuery.execute();
    expect(studant).toHaveLength(1);
  });
});
