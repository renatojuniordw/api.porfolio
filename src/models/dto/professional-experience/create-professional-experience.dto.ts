import { ApiProperty } from "@nestjs/swagger";

export class CreateProfessionalExperienceDto {
    @ApiProperty()
    nameCompany: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;

    @ApiProperty()
    office: string;

    @ApiProperty()
    description: string;

}
