import { TypeOrmDatabaseModule } from './infra/typeorm/typeorm.module';
import { Module } from '@nestjs/common';
@Module({
  imports: [TypeOrmDatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
