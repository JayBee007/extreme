import { Module } from '@nestjs/common';
import { IdeaController } from './idea.controller';
import { IdeaService } from './idea.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IdeaRepository } from './idea.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([IdeaRepository]),
  ],
  controllers: [IdeaController],
  providers: [IdeaService],
})
export class IdeaModule { }
