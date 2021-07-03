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
    TypeOrmModule.forRoot({
      // TODO[IH]: env variables
      type: 'mysql',
      host: 'localhost',
      port: 5432,
      username: 'whats-the-tune',
      password: 'hunter2',
      database: 'whats-the-tune',
      entities: [User],
      // TODO[IH]: the following should not be used in production
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private connection: Connection) {}
}
