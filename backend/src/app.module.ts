import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const controllers = [];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config/.env',
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
    }),
  ],
  controllers: controllers,
  providers: [],
})
export class AppModule {}
