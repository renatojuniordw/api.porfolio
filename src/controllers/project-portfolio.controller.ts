import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { ProjectPortfolioService } from '../services/project-portfolio.service';

import { CreateProjectPortfolioDto } from 'src/models/dto/project-portfolio/create-project-portfolio.dto';
import { UpdateProjectPortfolioDto } from 'src/models/dto/project-portfolio/update-project-portfolio.dto';

@Controller('project-portfolio')
@ApiTags('project-portfolio')
export class ProjectPortfolioController {
  constructor(private readonly projectPortfolioService: ProjectPortfolioService) {}

  @Post()
  @ApiBody({ type: CreateProjectPortfolioDto })
  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  create(@Body() createProjectPortfolioDto: CreateProjectPortfolioDto) {
    return this.projectPortfolioService.create(createProjectPortfolioDto);
  }

  @Get()
  findAll() {
    return this.projectPortfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectPortfolioService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateProjectPortfolioDto })
  update(@Param('id') id: string, @Body() updateProjectPortfolioDto: UpdateProjectPortfolioDto) {
    return this.projectPortfolioService.update(+id, updateProjectPortfolioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectPortfolioService.remove(+id);
  }
}
