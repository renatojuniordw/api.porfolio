import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateSkillDto } from 'src/models/dto/skills/create-skill.dto';
import { UpdateSkillDto } from 'src/models/dto/skills/update-skill.dto';

import { Skill } from 'src/models/skill.entity';

@Injectable()
export class SkillsService {

  constructor(
    @InjectModel(Skill)
    private skillModel: typeof Skill
  ) { }

  create(createSkillDto: CreateSkillDto) {
    return this.skillModel.create(createSkillDto);
  }

  findAll(): Promise<Skill[]> {
    return this.skillModel.findAll();
  }

  findOne(id: number): Promise<Skill> {
    return this.skillModel.findByPk(id);
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return this.skillModel.update(updateSkillDto, {
      where: { id: id }
    });
  }

  async remove(id: number): Promise<void> {
    const current = await this.findOne(id);
    current.destroy();
  }
}
