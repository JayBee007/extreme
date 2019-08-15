import { Controller, Get, Post, Delete, Put, Body, ValidationPipe, Param } from '@nestjs/common';

import { IdeaService } from './idea.service';
import { CreateIdeaDTO } from './dto/create-idea.dto';
import { Idea } from './idea.entity';

@Controller('idea')
export class IdeaController {

  constructor(private ideaService: IdeaService) { }

  @Get()
  async getAllIdeas() {
    return await this.ideaService.getAllIdeas();
  }

  @Get(':id')
  async getIdeaById(
    @Param('id') id: string,
  ) {
    return await this.ideaService.findById(id);
  }

  @Post()
  async createIdea(
    @Body(ValidationPipe) createIdeaDto: CreateIdeaDTO,
  ): Promise<Idea> {
    return await this.ideaService.createIdea(createIdeaDto);
  }

  @Delete(':id')
  async deleteIdeaById(
    @Param('id') id: string,
  ) {
    return await this.ideaService.deleteById(id);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() createIdeaDto: CreateIdeaDTO,
  ) {
    return await this.ideaService.updateById(id, createIdeaDto);
  }
}
