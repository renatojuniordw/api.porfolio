import { Module } from '@nestjs/common';

import { ProjectPortfolioService } from '../services/project-portfolio.service';
import { ProjectPortfolioController } from '../controllers/project-portfolio.controller';

@Module({
  controllers: [ProjectPortfolioController],
  providers: [ProjectPortfolioService]
})
export class ProjectPortfolioModule {}
