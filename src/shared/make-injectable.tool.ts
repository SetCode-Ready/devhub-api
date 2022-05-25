import { StudantRepositoryMock } from 'src/data/mocks/repositories/studant.repository.mock';

const studantMockRepostiory = new StudantRepositoryMock();

export function makeInjectable(target) {
  return {
    provide: target.name,
    useFactory: () => new target(studantMockRepostiory),
  };
}
