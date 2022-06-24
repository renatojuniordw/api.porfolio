import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectPortfolioDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    technologies: string;

    @ApiProperty()
    url: string;

    @ApiProperty()
    url_img: string;
}
