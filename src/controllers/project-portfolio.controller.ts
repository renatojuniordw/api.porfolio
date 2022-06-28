import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UsePipes } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { JoiValidationPipe } from 'src/config/joiValidationPipe.pipe';
import { ProjectPortfolioService } from '../services/project-portfolio.service';

import { CreateProjectPortfolioDto } from 'src/models/dto/project-portfolio/create-project-portfolio.dto';
import { UpdateProjectPortfolioDto } from 'src/models/dto/project-portfolio/update-project-portfolio.dto';

import { ProjectPortfolioSchema } from 'src/models/schema/project-portfolio.schema';

@Controller('project-portfolio')
@ApiTags('project-portfolio')
export class ProjectPortfolioController {
  constructor(private readonly projectPortfolioService: ProjectPortfolioService) { }

  @Post()
  @ApiBody({ type: CreateProjectPortfolioDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateProjectPortfolioDto
  })
  @UsePipes(new JoiValidationPipe(ProjectPortfolioSchema))
  create(@Body() createProjectPortfolioDto: CreateProjectPortfolioDto) {
    return this.projectPortfolioService.create(createProjectPortfolioDto);
  }

  @Get()
  findAll() {
    return this.projectPortfolioService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.projectPortfolioService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateProjectPortfolioDto })
  @UsePipes(new JoiValidationPipe(ProjectPortfolioSchema))
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number, @Body() updateProjectPortfolioDto: UpdateProjectPortfolioDto
  ) {
    return this.projectPortfolioService.update(+id, updateProjectPortfolioDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number
  ) {
    return this.projectPortfolioService.remove(+id);
  }
}
