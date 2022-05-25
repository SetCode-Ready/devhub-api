import { TeacherModule } from './infra/ioc/teacher/teacher.module';
import { TypeOrmDatabaseModule } from './infra/typeorm/typeorm.module';
import { Module } from '@nestjs/common';
import { StudantModule } from './infra/ioc/studant/studant.module';
@Module({
  imports: [TeacherModule, StudantModule, TypeOrmDatabaseModule],
})
export class AppModule {}
