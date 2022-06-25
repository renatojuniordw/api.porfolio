import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { SkillsService } from '../services/skills.service';

import { CreateSkillDto } from 'src/models/dto/skills/create-skill.dto';
import { UpdateSkillDto } from 'src/models/dto/skills/update-skill.dto';

@Controller('skills')
@ApiTags('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Post()
  @ApiBody({ type: CreateSkillDto })
  @ApiCreatedResponse({ description: 'The record has been successfully created.' })
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.skillsService.create(createSkillDto);
  }

  @Get()
  findAll() {
    return this.skillsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.skillsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateSkillDto })
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number, @Body() updateSkillDto: UpdateSkillDto
  ) {
    return this.skillsService.update(+id, updateSkillDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.skillsService.remove(+id);
  }
}
