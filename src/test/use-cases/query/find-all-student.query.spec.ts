import { FindAllStudentQuery } from '../../../use-cases/student/query/find-all-students.query';
import { Test, TestingModule } from '@nestjs/testing';
import { REPOSITORY } from '../../../core/constants/repository.enum';
import { StudantRepositoryMock } from '../../../data/mocks/repositories/studant.repository.mock';

describe('Criar uma conta do tipo Aluno', () => {
  let findAllStudentQuery: FindAllStudentQuery;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: REPOSITORY.STUDANT_REPOSITORY,
          useValue: StudantRepositoryMock,
        },
        FindAllStudentQuery,
      ],
    }).compile();

    findAllStudentQuery =
      moduleRef.get<FindAllStudentQuery>(FindAllStudentQuery);
  });

  it('Deve criar um novo usuário', async () => {
    const studant = await findAllStudentQuery.execute();

    expect(studant).toHaveLength(0);
  });
});
