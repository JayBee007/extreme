import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { typeOrmConfg } from './config/typeorm.config';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfg),
    UserModule,
    IdeaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
