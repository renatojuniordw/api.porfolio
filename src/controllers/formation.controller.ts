import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UsePipes, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { FormationService } from '../services/formation.service';

import { UpdateFormationDto } from 'src/models/dto/formation/update-formation.dto';
import { CreateFormationDto } from 'src/models/dto/formation/create-formation.dto';

import { JoiValidationPipe } from 'src/config/joiValidationPipe.pipe';
import { FormationSchema } from 'src/models/schema/formation.schema';

@Controller('formation')
@ApiTags('formation')
export class FormationController {
  constructor(private readonly formationService: FormationService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: CreateFormationDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateFormationDto
  })
  @UsePipes(new JoiValidationPipe(FormationSchema))
  create(@Body() createFormationDto: CreateFormationDto) {
    return this.formationService.create(createFormationDto);
  }

  @Get()
  findAll() {
    return this.formationService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number,
  ) {
    return this.formationService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: UpdateFormationDto })
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number, @Body() updateFormationDto: UpdateFormationDto
  ) {
    return this.formationService.update(+id, updateFormationDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.formationService.remove(+id);
  }
}
