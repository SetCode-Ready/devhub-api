import { AuthenticationModule } from './infra/authentication/authentication.module';
import { TeacherModule } from './infra/ioc/teacher/teacher.module';
import { TypeOrmDatabaseModule } from './infra/typeorm/typeorm.module';
import { Module } from '@nestjs/common';
import { StudantModule } from './infra/ioc/studant/studant.module';
@Module({
  imports: [
    AuthenticationModule,
    TeacherModule,
    StudantModule,
    TypeOrmDatabaseModule,
  ],
})
export class AppModule {}
