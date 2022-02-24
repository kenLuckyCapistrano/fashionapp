import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesModule } from './sales/sales.module';
import { Sales } from './sales/sales.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Sales],
    synchronize: true
  }),
   SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
