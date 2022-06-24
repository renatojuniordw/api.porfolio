import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ProfessionalExperienceService } from '../services/professional-experience.service';

import { CreateProfessionalExperienceDto } from 'src/models/dto/professional-experience/create-professional-experience.dto';
import { UpdateProfessionalExperienceDto } from 'src/models/dto/professional-experience/update-professional-experience.dto';

@Controller('professional-experience')
@ApiTags('professional-experience')
export class ProfessionalExperienceController {
  constructor(private readonly professionalExperienceService: ProfessionalExperienceService) {}

  @Post()
  @ApiBody({ type: CreateProfessionalExperienceDto })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  create(@Body() createProfessionalExperienceDto: CreateProfessionalExperienceDto) {
    return this.professionalExperienceService.create(createProfessionalExperienceDto);
  }

  @Get()
  findAll() {
    return this.professionalExperienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionalExperienceService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateProfessionalExperienceDto })
  update(@Param('id') id: string, @Body() updateProfessionalExperienceDto: UpdateProfessionalExperienceDto) {
    return this.professionalExperienceService.update(+id, updateProfessionalExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionalExperienceService.remove(+id);
  }
}
