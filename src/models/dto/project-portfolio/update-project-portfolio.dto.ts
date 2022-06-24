import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectPortfolioDto } from './create-project-portfolio.dto';

export class UpdateProjectPortfolioDto extends PartialType(CreateProjectPortfolioDto) {
    @ApiProperty()
    id: number;
}
