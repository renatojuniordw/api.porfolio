import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UsePipes } from '@nestjs/common';

import { JoiValidationPipe } from 'src/config/joiValidationPipe.pipe';
import { ProfessionalExperienceService } from '../services/professional-experience.service';

import { CreateProfessionalExperienceDto } from 'src/models/dto/professional-experience/create-professional-experience.dto';
import { UpdateProfessionalExperienceDto } from 'src/models/dto/professional-experience/update-professional-experience.dto';

import { ProfessionalExperienceSchema } from 'src/models/schema/professional-experience.schema';

@Controller('professional-experience')
@ApiTags('professional-experience')
export class ProfessionalExperienceController {
  constructor(private readonly professionalExperienceService: ProfessionalExperienceService) { }

  @Post()
  @ApiBody({ type: CreateProfessionalExperienceDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateProfessionalExperienceDto
  })
  @UsePipes(new JoiValidationPipe(ProfessionalExperienceSchema))
  create(@Body() createProfessionalExperienceDto: CreateProfessionalExperienceDto) {
    return this.professionalExperienceService.create(createProfessionalExperienceDto);
  }

  @Get()
  findAll() {
    return this.professionalExperienceService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number,
  ) {
    return this.professionalExperienceService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateProfessionalExperienceDto })
  @UsePipes(new JoiValidationPipe(ProfessionalExperienceSchema))
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number, @Body() updateProfessionalExperienceDto: UpdateProfessionalExperienceDto
  ) {
    return this.professionalExperienceService.update(+id, updateProfessionalExperienceDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.professionalExperienceService.remove(+id);
  }
}
