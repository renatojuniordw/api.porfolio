import { Injectable } from '@nestjs/common';

import { CreateProjectPortfolioDto } from 'src/models/dto/project-portfolio/create-project-portfolio.dto';
import { UpdateProjectPortfolioDto } from 'src/models/dto/project-portfolio/update-project-portfolio.dto';

@Injectable()
export class ProjectPortfolioService {
  create(createProjectPortfolioDto: CreateProjectPortfolioDto) {
    return 'This action adds a new projectPortfolio';
  }

  findAll() {
    return `This action returns all projectPortfolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectPortfolio`;
  }

  update(id: number, updateProjectPortfolioDto: UpdateProjectPortfolioDto) {
    return `This action updates a #${id} projectPortfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectPortfolio`;
  }
}
