import { PartialType } from '@nestjs/swagger';
import { CreateProjectPortfolioDto } from './create-project-portfolio.dto';

export class UpdateProjectPortfolioDto extends PartialType(CreateProjectPortfolioDto) {}
