import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateProjectPortfolioDto } from 'src/models/dto/project-portfolio/create-project-portfolio.dto';
import { UpdateProjectPortfolioDto } from 'src/models/dto/project-portfolio/update-project-portfolio.dto';

import { ProjectPortfolio } from 'src/models/project-portfolio.entity';

@Injectable()
export class ProjectPortfolioService {

  constructor(
    @InjectModel(ProjectPortfolio)
    private projectPortfolioModel: typeof ProjectPortfolio
  ) { }

  create(createProjectPortfolioDto: CreateProjectPortfolioDto) {
    return this.projectPortfolioModel.create(createProjectPortfolioDto);
  }

  findAll(): Promise<ProjectPortfolio[]> {
    return this.projectPortfolioModel.findAll();
  }

  findOne(id: number): Promise<ProjectPortfolio> {
    return this.projectPortfolioModel.findByPk(id);
  }

  update(id: number, updateProjectPortfolioDto: UpdateProjectPortfolioDto) {
    return this.projectPortfolioModel.update(updateProjectPortfolioDto, {
      where: { id: id }
    });
  }

  async remove(id: number) {
    const current = await this.findOne(id);
    current.destroy();
  }
}
