import { Teacher } from './../entities/domain/teacher';
import { UserBaseRepository } from './user.base.repository';

export type ITeacherRepository = UserBaseRepository<Teacher>;
