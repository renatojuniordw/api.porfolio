import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SkillsService } from '../services/skills.service';

import { CreateSkillDto } from 'src/models/dto/skills/create-skill.dto';
import { UpdateSkillDto } from 'src/models/dto/skills/update-skill.dto';

@Controller('skills')
@ApiTags('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsService.remove(+id);
  }
}
