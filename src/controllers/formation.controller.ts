import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';

import { FormationService } from '../services/formation.service';

import { UpdateFormationDto } from 'src/models/dto/formation/update-formation.dto';
import { CreateFormationDto } from 'src/models/dto/formation/create-formation.dto';

@Controller('formation')
@ApiTags('formation')
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Post()
  @ApiBody({ type: CreateFormationDto })
  create(@Body() createFormationDto: CreateFormationDto) {
    return this.formationService.create(createFormationDto);
  }

  @Get()
  findAll() {
    return this.formationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formationService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateFormationDto })
  update(@Param('id') id: string, @Body() updateFormationDto: UpdateFormationDto) {
    return this.formationService.update(+id, updateFormationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formationService.remove(+id);
  }
}
