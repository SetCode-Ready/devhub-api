import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';
import { IStudantRepository } from './../../../core/repositories/studant.repository';
import { FindAllStudentQuery } from './../../../use-cases/query/student/find-all-students.query';
describe('Criar uma conta do tipo Aluno', () => {
  let findAllStudentQuery: FindAllStudentQuery;
  let studantRepository: IStudantRepository;

  beforeAll(async () => {
    studantRepository = new StudantRepositoryMock();

    findAllStudentQuery = new FindAllStudentQuery(studantRepository);
  });

  it('Deve criar um novo usuário', async () => {
    const studant = await findAllStudentQuery.execute();

    expect(studant).toHaveLength(0);
  });
});
