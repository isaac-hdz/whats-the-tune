import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// modules
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// controllers
import { AppController } from './app.controller';

// services
import { AppService } from './app.service';

// entities
import { User } from './users/user.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
