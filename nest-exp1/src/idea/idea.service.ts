import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Idea } from './idea.entity';
import { CreateIdeaDTO } from './dto/create-idea.dto';
import { IdeaRepository } from './idea.repository';
import { DeleteResult } from 'typeorm';

@Injectable()
export class IdeaService {

  constructor(
    @InjectRepository(IdeaRepository)
    private ideaRepository: IdeaRepository,
  ) { }

  async getAllIdeas() {
    return await this.ideaRepository.find();
  }

  async createIdea(createIdeaDto: CreateIdeaDTO): Promise<Idea> {
    return await this.ideaRepository.createIdea(createIdeaDto);
  }

  async findById(id: string): Promise<Idea> {
    return await this.ideaRepository.findOne({ where: { id } });
  }

  async deleteById(id: string): Promise<DeleteResult> {
    const result = await this.ideaRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Idea with id ${id} not found`);
    }
    return result;
  }

  async updateById(id: string, createIdeaDto: Partial<CreateIdeaDTO>): Promise<Idea> {
    const toUpdate = await this.findById(id);
    const updated = Object.assign(toUpdate, createIdeaDto);

    const idea = await this.ideaRepository.save(updated);
    return idea;
  }
}
