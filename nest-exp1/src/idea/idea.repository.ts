import { EntityRepository, Repository } from 'typeorm';

import { Idea } from './idea.entity';
import { CreateIdeaDTO } from './dto/create-idea.dto';

@EntityRepository(Idea)
export class IdeaRepository extends Repository<Idea> {

  async createIdea(createIdeaDto: CreateIdeaDTO): Promise<Idea> {
    const { idea, description } = createIdeaDto;
    const newIdea = new Idea();

    newIdea.idea = idea;
    newIdea.description = description;

    await newIdea.save();

    return newIdea;

  }
}
