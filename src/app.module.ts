import { StudentController } from './presentation/controllers/student.controller';
import { StudantModule } from './infra/ioc/studant.module';
import { TypeOrmDatabaseModule } from './infra/typeorm/typeorm.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [StudantModule, TypeOrmDatabaseModule],
})
export class AppModule {}
